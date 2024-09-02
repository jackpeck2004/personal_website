import Link from "next/link";
import { FC } from "react";
import { Section } from "@/components/common";
import { ISoftwareProject } from "@/lib/types";
import { getSoftwareProjects } from "@/data/software-projects";

const SoftwareProject: FC<Omit<ISoftwareProject, "slug">> = ({
  title,
  languages: langs,
  frameworks,
  description,
  github: gitHubUrl,
  live: liveUrl,
  date,
}) => {
  return (
    <>
      <div className="border border-gray-200 rounded p-4 mb-8">
        <div>
          <h4 className="font-semibold text-xl">{title}</h4>
          <h5>{date}</h5>
          <h6 className="mb-2 text-gray-600">
            Languages: {langs.length > 0 && langs}
            <br />
            {(frameworks && frameworks.length > 0) ? "Frameworks: " + frameworks : ""}
          </h6>

          <p>{description}</p>
          <div className="pt-2">
            {gitHubUrl && (
              <Link href={gitHubUrl} className="link" target="_blank">
                GitHub
              </Link>
            )}
            {liveUrl && (
              <Link href={liveUrl} className="link" target="_blank">
                Live
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export async function SoftwareProjects () {
    const projects = await getSoftwareProjects();

  return (
    <Section title="Software" subsection>
      <div className="mt-[2vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[40px] grid-y-[40px]">
        {projects &&
          projects.map((project, idx) => {
            return (
              <SoftwareProject
                key={idx}
                title={project.title}
                languages={project.languages}
                frameworks={project.frameworks}
                description={project.description}
                live={project.live && project.live}
                github={project.github && project.github}
                date={project.date}
              />
            );
          })}
      </div>
    </Section>
  );
};
