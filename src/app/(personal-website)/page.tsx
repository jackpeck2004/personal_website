import { DownloadCVButton, Section } from "@/components/common";
import {
  Characteristics,
  Conferences,
  SoftwareProjects,
  WorkExperience,
  Education,
  Skills,
  // ResearchAndPapers
} from "@/components/partials";
import { Socials } from "@/components/common/socials";

export default function HomePage() {
  return (
    <div
      className="min-h-[94vh] w-full overflow-hidden bg-white text-black"
      id="home"
    >
      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <h1 className="pt-24 text-4xl font-bold leading-tight tracking-tight sm:pt-32 sm:text-5xl lg:text-6xl">
          I&apos;m Giacomo Pasin. <br /> CS Student and <br /> STEM Enthusiast
        </h1>
        <div className="mt-5 flex items-center gap-6 text-2xl">
          <Socials />
          <DownloadCVButton />
        </div>
        <Characteristics />
        <Section title="Projects" sectionId="projects">
        {/* @ts-ignore */}
          <SoftwareProjects />
        </Section>
        {/*
        <ResearchAndPapers />
        */}
        <Education />
        <WorkExperience />
        <Skills />
        <Conferences />
      </div>
    </div>
  );
}

