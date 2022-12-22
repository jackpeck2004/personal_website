import Link from "next/link";
import { FC } from "react";
import { Section } from "@/components/common";
import { IProject } from "@/lib/types";

const Project: FC<Omit<IProject, "slug">> = ({
  title,
  languages: langs,
  frameworks,
  description,
  github: gitHubUrl,
  live: liveUrl
}) => {
  return (
    <>
      <div className="border border-gray-200 rounded p-4 mb-8">
        <div>
          <h4 className="font-semibold text-xl">{title}</h4>
          <h6 className="mb-2 text-gray-600">
            Langs: {langs && langs.join(", ")}
            <br />
            {frameworks.length ? "Frameworks: " + frameworks.join(", ") : ""}
          </h6>

          <p>{description}</p>
          <div className="pt-2">
            {gitHubUrl && (
              <Link href={gitHubUrl}>
                <a
                  className="link"
                  target="_blank"
                >
                  GitHub
                </a>
              </Link>
            )}
            {liveUrl && (
              <Link href={liveUrl}>
                <a
                  className="link"
                  target="_blank"
                >
                  Live
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export const Projects: FC<{ projects: Array<IProject> }> = ({ projects }) => {
  return (
    <Section title="Projects" sectionId="projects">
      <div className="mt-[2vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[40px] grid-y-[40px]">
        {projects &&
          projects.map((project, idx) => {
            return (
              <Project
                key={idx}
                title={project.title}
                languages={project.languages}
                frameworks={project.frameworks}
                description={project.description}
                live={project.live && project.live}
                github={project.github && project.github}
              />
            );
          })}
      </div>
    </Section>
  );
};

export default Projects;
