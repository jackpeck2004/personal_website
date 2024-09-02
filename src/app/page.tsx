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

export default function HomePage() {
  return (
    <div
      className="min-h-[94vh] bg-white text-black py-[2vh] w-screen overflow-hidden"
      id="home"
    >
      <div className="px-4 lg:px-52">
        <h1 className="2xl:text-8xl lg:text-6xl text-5xl font-bold pt-[20vh]">
          I&apos;m Giacomo Pasin. <br /> CSE Student and <br /> STEM Enthusiast
        </h1>
        <div className="flex mt-4">
          {SOCIALS.map(({ url, icon }) => (
            <Link href={url} key={url} target="_blank" className="social-link">
              {icon}
            </Link>
          ))}
        </div>
        <Characteristics />
        <section className="my-4 flex justify-center">
          <DownloadCVButton />
        </section>
        <Section title="Projects" sectionId="projects">
        {/* @ts-ignore */}
          <SoftwareProjects />
        </Section>
        {/*
        <ResearchAndPapers />
        */}
        <WorkExperience />
        <Education />
        <LanguageSkills />
        <SoftSkills />
        <DigitalSkills />
        <Conferences />
      </div>
    </div>
  );
}

