import { SubHeading } from "@/components/common/headings";
import constants from "@/lib/constants";
import { useMediaQuery } from "@/lib/hooks";

const Anchor = ({children, href, target}) => {
  return (
    <a className="text-blue-500 pr-4 cursor-pointer" href={href} target={target}>{children}</a>
  );
}

const Projects = ({ children }) => {
  const isDesktop = useMediaQuery(constants.mediaQueries.IS_LARGE);
  const isMedium = useMediaQuery(constants.mediaQueries.IS_MEDIUM);

  if (isDesktop) {
    return <div className="mt-[2vh] grid grid-cols-3 gap-x-[40px] grid-y-[40px]">{children}</div>;
  }

  if (isMedium) {
    return <div className="mt-[2vh] grid grid-cols-2 gap-x-[40px] grid-y-[40px]">{children}</div>;
  }

  return <div className="mt-[2vh] grid grid-cols-1 gap-x-[40px] grid-y-[40px]">{children}</div>;
};

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
    {/* card */}
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

const Section = ({ projects }) => {
  return (
    <section className="mt-[10vh]" id="projects">
      <SubHeading>Projects</SubHeading>
      <Projects>
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
      </Projects>
    </section>
  );
};

export default Section;
