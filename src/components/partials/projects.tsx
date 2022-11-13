import Link from "next/link";
import { Anchor, Section } from "@/components/common";

const Project = ({
  title,
  langs,
  frameworks,
  description,
  gitHubUrl,
  liveUrl
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
              <Link href={gitHubUrl} passHref>
                <Anchor target="_blank">GitHub</Anchor>
              </Link>
            )}
            {liveUrl && (
              <Link href={liveUrl} passHref>
                <Anchor target="_blank">Live</Anchor>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export const Projects = ({ projects }) => {
  return (
    <Section title="Projects" sectionId="projects">
      <div className="mt-[2vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[40px] grid-y-[40px]">
        {projects &&
          projects.map((project, idx) => {
            return (
              <Project
                key={idx}
                title={project.title}
                langs={project.languages}
                frameworks={project.frameworks}
                description={project.description}
                liveUrl={project.live && project.live}
                gitHubUrl={project.github && project.github}
              />
            );
          })}
      </div>
    </Section>
  );
};

export default Projects;
