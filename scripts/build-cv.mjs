import {
  readFile,
  readdir,
  mkdir,
  copyFile,
  writeFile
} from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";
import matter from "gray-matter";

const root = fileURLToPath(new URL("../", import.meta.url));
const readJSON = async (file) =>
  JSON.parse(await readFile(path.join(root, file), "utf8"));

// Escape in one pass so generated TeX commands aren't escaped again.
export function escapeLatex(value) {
  const replacements = {
    "\\": "\\textbackslash{}",
    "{": "\\{",
    "}": "\\}",
    $: "\\$",
    "&": "\\&",
    "#": "\\#",
    "%": "\\%",
    _: "\\_",
    "~": "\\textasciitilde{}",
    "^": "\\textasciicircum{}",
    "–": "--",
    "—": "---",
    "’": "'",
    "“": "``",
    "”": "''"
  };
  return String(value).replace(
    /[\\{}$&#%_~^–—’“”]/g,
    (char) => replacements[char]
  );
}

function link(url, label) {
  // URLs are data too: never interpolate raw TeX from content.
  if (!/^(https?:\/\/|mailto:)/.test(url))
    throw new Error(`Unsupported CV link: ${url}`);
  return `\\href{${escapeLatex(url)}}{${escapeLatex(label)}}`;
}

function richText(text) {
  return text
    .split(/(\[[^\]]+\]\([^)]+\)|\*[^*]+\*)/g)
    .map((part) => {
      const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (match) return link(match[2], match[1]);
      if (part.startsWith("*") && part.endsWith("*"))
        return `\\emph{${escapeLatex(part.slice(1, -1))}}`;
      return escapeLatex(part);
    })
    .join("");
}

function bullets(items) {
  if (!items.length) return "";
  return [
    "\\resumeItemListStart",
    ...items.map((item) => `\\resumeItem{${richText(item)}}`),
    "\\resumeItemListEnd"
  ].join("\n");
}

function timeline(title, entries, education = false) {
  return [
    `\\section{${title}}`,
    "\\resumeSubHeadingListStart",
    ...entries
      .filter((entry) => entry.cv)
      .map((entry) => {
        const heading = education
          ? [entry.org, entry.title]
          : [entry.title, entry.org];
        const details = entry.details.flat();
        const selected =
          entry.cvBullets ||
          (entry.cvBulletIndexes
            ? entry.cvBulletIndexes.map((index) => {
                if (typeof details[index] !== "string")
                  throw new Error(
                    `Invalid CV bullet index for ${entry.title}: ${index}`
                  );
                return details[index];
              })
            : details);
        return `\\resumeSubheading{${escapeLatex(heading[0])}}{${escapeLatex(
          entry.period
        )}}{${escapeLatex(heading[1])}}{${escapeLatex(
          entry.location || ""
        )}}\n${bullets(selected)}`;
      }),
    "\\resumeSubHeadingListEnd"
  ].join("\n");
}

async function main() {
  const [profile, education, experience, skills] = await Promise.all([
    readJSON("src/data/profile.json"),
    readJSON("src/data/education.json"),
    readJSON("src/data/experience.json"),
    readJSON("src/data/skills.json")
  ]);
  const projectDirectory = path.join(root, "_content/software-projects");
  const projects = (
    await Promise.all(
      (
        await readdir(projectDirectory)
      )
        .filter((file) => file.endsWith(".md"))
        .sort()
        .map(async (file) => {
          return matter(
            await readFile(path.join(projectDirectory, file), "utf8")
          ).data;
        })
    )
  ).filter((project) => project.published && project.cv);
  projects.sort((a, b) => a.cvOrder - b.cvOrder);
  const projectSection = [
    "\\section{Selected Projects}",
    "\\resumeSubHeadingListStart",
    ...projects.map((project) => {
      const name =
        project.github || project.live
          ? link(
              project.github || project.live,
              project.cvTitle || project.title
            )
          : escapeLatex(project.cvTitle || project.title);
      return `\\resumeProjectHeading{\\textbf{${name}} $|$ \\emph{${escapeLatex(
        project.cvTechnologies || project.languages
      )}}}{${escapeLatex(project.date)}}\n${bullets(
        project.cvBullets || [project.description]
      )}`;
    }),
    "\\resumeSubHeadingListEnd"
  ].join("\n");
  const skillLines = skills.digitalSkills
    .filter((group) => group.cv !== false)
    .map(
      ({ title, contents, cvContents }) =>
        `\\textbf{${escapeLatex(title)}}: ${escapeLatex(
          (cvContents || contents).join(", ")
        )}`
    );
  skillLines.push(
    `\\textbf{Languages}: ${skills.languages
      .map(({ language, speaking }) => escapeLatex(`${language} (${speaking})`))
      .join(", ")}`
  );
  const values = {
    NAME: escapeLatex(profile.name),
    CONTACT: [
      link(profile.website, new URL(profile.website).hostname),
      ...profile.socials.map(({ label, url }) => {
        const contactUrl =
          label === "Email" && profile.cvEmail
            ? `mailto:${profile.cvEmail}`
            : url;
        return link(
          contactUrl,
          label === "Email" ? contactUrl.slice(7) : label
        );
      })
    ].join(" $|$ "),
    EDUCATION: timeline("Education", education, true),
    EXPERIENCE: timeline("Experience", experience),
    PROJECTS: projects.length ? projectSection : "",
    SKILLS: `\\section{Skills}\n\\begin{itemize}[leftmargin=0.15in,label={}]\n\\small{\\item{${skillLines.join(
      " \\\\\n"
    )}}}\n\\end{itemize}`
  };
  const template = await readFile(path.join(root, "cv/template.tex"), "utf8");
  const tex = template.replace(/@@([A-Z]+)@@/g, (_, key) => {
    if (!(key in values))
      throw new Error(`Unknown template placeholder: ${key}`);
    return values[key];
  });
  const buildDirectory = path.join(root, "build/cv");
  await mkdir(buildDirectory, { recursive: true });
  await writeFile(path.join(buildDirectory, "resume.tex"), tex);
  if (process.argv.includes("--tex-only")) {
    console.log("Generated build/cv/resume.tex");
    return;
  }
  // Compile in an intermediate directory; publish only after both passes succeed.
  for (let pass = 0; pass < 2; pass++) {
    const result = spawnSync(
      "pdflatex",
      [
        "-no-shell-escape",
        "-interaction=nonstopmode",
        "-halt-on-error",
        "-file-line-error",
        "resume.tex"
      ],
      { cwd: buildDirectory, encoding: "utf8" }
    );
    if (result.error?.code === "ENOENT")
      throw new Error(
        "pdflatex is required. Install MacTeX (macOS) or texlive-latex-extra + texlive-fonts-recommended (Debian/Ubuntu), then run pnpm cv:build."
      );
    if (result.error || result.status !== 0)
      throw new Error(
        `LaTeX compilation failed. See build/cv/resume.log.\n${
          result.error || result.stdout?.slice(-4000) || result.stderr
        }`
      );
  }
  const log = await readFile(path.join(buildDirectory, "resume.log"), "utf8");
  if (/Overfull \\[hv]box/.test(log))
    throw new Error(
      "CV content overflows its layout. Adjust selection or template; see build/cv/resume.log."
    );
  const destination = path.join(root, "public/GiacomoPasin_CV.pdf");
  await copyFile(path.join(buildDirectory, "resume.pdf"), destination);
  console.log(`Generated ${destination}`);
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
