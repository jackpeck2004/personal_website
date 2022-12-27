// import Link from "next/link";
import { DownloadCVButton } from "@/components/common";
import {
  Characteristics,
  Projects,
  WorkExperience,
  Education,
  LanguageSkills,
  SoftSkills
} from "@/components/partials";
import { DigitalSkillsSection } from "@/components/partials/digital-skills";
import constants from "@/lib/constants";
import { useMediaQuery } from "@/lib/hooks";
import {
  ICharacteristic,
  IProject,
  ILanguage,
  IDigitalSkill
} from "@/lib/types";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

const LANGUAGES: Array<ILanguage> = [
  {
    language: "English",
    understading: "Native",
    speaking: "Native",
    writing: "Native"
  },
  {
    language: "Italian",
    understading: "Native",
    speaking: "Native",
    writing: "Native"
  },
  {
    language: "Spanish",
    understading: "B2",
    speaking: "B2",
    writing: "B2"
  }
];

const SOFT_SKILLS: Array<string> = [
  "Problem Solving",
  "Analytical Mindset",
  "Aptitude to Research",
  "Team Leadership",
  "Public Speaking",
  "Motivated",
  "Independent"
];

const DIGITAL_SKILLS: Array<IDigitalSkill> = [
  {
    title: "Programming Languages and Technologies",
    contents: [
      "TypeScript",
      "CSS",
      "JavaScript",
      "JSON",
      "Jupyter Notebooks",
      "Python",
      "Git",
      "Docker",
      "Linux",
      "HTML",
      "Postman",
      "GitHub Redis",
      "MongoDB",
      "WordPress",
      "Blade",
      "php",
      "Squarespace CMS"
    ]
  },
  {
    title: "Office Tools",
    contents: ["Google", "Workspace", "Microsoft", "Office", "Windows", "MacOS"]
  }
];

const CHARACTERISTICS: Array<ICharacteristic> = [
  {
    title: "my passions",
    description:
      "computer vision, artificial intelligence, nuclear physics, optics, robotics, web technologies, basketball and culinary culture"
  },
  {
    title: "my education",
    description:
      "Recieved IB Diploma with a score of 40. Subjects taken include HL Physics, HL Maths, and HL CompSci",
    sectionLinkId: "education"
  },
  {
    title: "my work experience",
    description: "I'm currently the CTO at T.W.I.N srl",
    sectionLinkId: "experience"
  }
];

const Page: NextPage = ({
  projects
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const isDesktop = useMediaQuery(constants.mediaQueries.IS_XLARGE);

  return (
    <div
      className="min-h-[94vh] bg-white text-black py-[2vh] w-screen overflow-hidden"
      id="home"
    >
      <div className="px-4 lg:px-52">
        <h1 className="2xl:text-9xl lg:text-6xl text-5xl font-bold pt-[20vh]">
          I&apos;m Giacomo Pasin. <br /> IB Graduate and <br /> STEM Enthusiast
        </h1>
        <Characteristics characteristics={CHARACTERISTICS} />
        {!isDesktop ? (
          <section className="my-4 flex justify-center">
            <DownloadCVButton />
          </section>
        ) : null}
        <Projects projects={projects} />
        <WorkExperience />
        <Education />
        <LanguageSkills languages={LANGUAGES} />
        <SoftSkills skills={SOFT_SKILLS} />
        <DigitalSkillsSection skills={DIGITAL_SKILLS} />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const filePath = "_content/projects";
  const files = fs.readdirSync(filePath);

  const projects: Array<IProject> = files
    .map((file): IProject => {
      const data = fs.readFileSync(`${filePath}/${file}`).toString();

      const d = matter(data).data;

      let frameworks: Array<string> = [];
      if (d.frameworks) frameworks = d.frameworks.split(", ");

      let languages: Array<string> = [];
      if (d.languages) languages = d.languages.split(", ");

      if (frameworks.length) delete d["frameworks"];
      if (languages.length) delete d["languages"];

      const f = {
        ...d,
        frameworks,
        languages
      };

      return {
        ...f,
        slug: file.split(".")[0]
      } as IProject;
    })
    .sort((a, b) => (b.title < a.title ? 1 : -1));

  return {
    props: {
      projects
    }
  };
};

export default Page;
