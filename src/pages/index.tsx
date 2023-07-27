// import Link from "next/link";
import { DownloadCVButton, Section } from "@/components/common";
import {
  Characteristics,
  Conferences,
  SoftwareProjects,
  WorkExperience,
  Education,
  LanguageSkills,
  SoftSkills,
  DigitalSkills,
  ResearchAndPapers
} from "@/components/partials";
import constants from "@/lib/constants";
import { useMediaQuery } from "@/lib/hooks";
import { ISoftwareProject, IResearchPaper } from "@/lib/types";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import {
  LANGUAGES,
  SOFT_SKILLS,
  DIGITAL_SKILLS,
  CHARACTERISTICS
} from "@/lib/contents";
import Link from "next/link";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { ReactNode } from "react";

export interface ISocial {
  url: string;
  icon: ReactNode;
}

const SOCIALS: Array<ISocial> = [
  {
    url: "https://github.com/jackpeck2004",
    icon: <FiGithub />
  },
  {
    url: "https://linkedin.com/in/jackpasin",
    icon: <FiLinkedin />
  },
  {
    url: "mailto:giacomo.pasin+contact@gmail.com",
    icon: <FiMail />
  }
];

const Page: NextPage = ({
  softwareProjects,
  researchPapers
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const isDesktop = useMediaQuery(constants.mediaQueries.IS_XLARGE);

  return (
    <div
      className="min-h-[94vh] bg-white text-black py-[2vh] w-screen overflow-hidden"
      id="home"
    >
      <div className="px-4 lg:px-52">
        <h1 className="2xl:text-8xl lg:text-6xl text-5xl font-bold pt-[20vh]">
          I&apos;m Giacomo Pasin. <br /> IB Graduate and <br /> STEM Enthusiast
        </h1>
        <div className="flex mt-4">
          {SOCIALS.map(({ url, icon }) => (
            <Link href={url} passHref key={url}>
              <a target="_blank" className="social-link">
                {icon}
              </a>
            </Link>
          ))}
        </div>
        <Characteristics characteristics={CHARACTERISTICS} />
        {!isDesktop ? (
          <section className="my-4 flex justify-center">
            <DownloadCVButton />
          </section>
        ) : null}
        <Section title="Projects" sectionId="projects">
          <SoftwareProjects projects={softwareProjects} />
        </Section>
        <ResearchAndPapers researchPapers={researchPapers} />
        <WorkExperience />
        <Education />
        <LanguageSkills languages={LANGUAGES} />
        <SoftSkills skills={SOFT_SKILLS} />
        <DigitalSkills skills={DIGITAL_SKILLS} />
        <Conferences />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let filePath = "_content/software-projects";
  let files = fs.readdirSync(filePath);

  const softwareProjects: Array<ISoftwareProject> = files
    .map((file): ISoftwareProject => {
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
      } as ISoftwareProject;
    })
    .sort((a, b) => (b.title < a.title ? 1 : -1));

  filePath = "_content/research-and-papers";
  files = fs.readdirSync(filePath);

  const researchAndPapers: Array<IResearchPaper> = files.map(
    (file): IResearchPaper => {
      const data = fs.readFileSync(`${filePath}/${file}`).toString();
      const d = matter(data).data as IResearchPaper;

      return d
    }
  );

  return {
    props: {
      softwareProjects,
      researchPapers: researchAndPapers
    }
  };
};

export default Page;
