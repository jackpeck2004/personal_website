import { Anchor } from "@/components/common";

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
              <Anchor href={gitHubUrl} target="_blank">
                GitHub
              </Anchor>
            )}
            {liveUrl && (
              <Anchor href={liveUrl} target="_blank">
                Live
              </Anchor>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export const Projects = ({ projects }) => {
  return (
    <section className="mt-[10vh]" id="projects">
      <h2 className="text-5xl">Projects</h2>
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
    </section>
  );
};

export default Projects;
