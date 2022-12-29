// import Link from "next/link";
import { DownloadCVButton } from "@/components/common";
import {
  Characteristics,
  Conferences,
  SoftwareProjects,
  WorkExperience,
  Education,
  LanguageSkills,
  SoftSkills,
  DigitalSkills
} from "@/components/partials";
import constants from "@/lib/constants";
import { useMediaQuery } from "@/lib/hooks";
import { ISoftwareProject } from "@/lib/types";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import {
  LANGUAGES,
  SOFT_SKILLS,
  DIGITAL_SKILLS,
  CHARACTERISTICS
} from "@/lib/contents";

const Page: NextPage = ({
  softwareProjects
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
        <SoftwareProjects projects={softwareProjects} />
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
  const filePath = "_content/software-projects";
  const files = fs.readdirSync(filePath);

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

  return {
    props: {
      softwareProjects: softwareProjects
    }
  };
};

export default Page;
