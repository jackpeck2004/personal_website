import styled from "@emotion/styled";
import { SubHeading } from "../common/headings";
import { Card } from "react-bootstrap";
import constants from "../../lib/constants";
import useMediaQuery from "../../lib/hooks/useMediaQuery";

const ProjectSection = styled.section`
  margin-top: 10vh;
`;

const DesktopProjectsLayout = styled.div`
  margin-top: 2vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
`;

const DoubleLayout = styled.div`
  margin-top: 2vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
`;

const StandardLayout = styled.div`
  margin-top: 2vh;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
`;

const Projects = ({ children }) => {
  const isDesktop = useMediaQuery(constants.mediaQueries.IS_LARGE);
  const isMedium = useMediaQuery(constants.mediaQueries.IS_MEDIUM);

  if (isDesktop) {
    return <DesktopProjectsLayout>{children}</DesktopProjectsLayout>;
  }

  if (isMedium) {
    return <DoubleLayout>{children}</DoubleLayout>;
  }

  return <StandardLayout>{children}</StandardLayout>;
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
    <Card style={{ background: "transparent", border: "1px solid lightgrey" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Langs: {langs && langs.join(", ")}
          <br />
          {frameworks.length ? "Frameworks: " + frameworks.join(", ") : ""}
        </Card.Subtitle>

        <Card.Text>{description}</Card.Text>
        {gitHubUrl && (
          <Card.Link href={gitHubUrl} target="_blank">
            GitHub
          </Card.Link>
        )}
        {liveUrl && (
          <Card.Link href={liveUrl} target="_blank">
            Live
          </Card.Link>
        )}
      </Card.Body>
    </Card>
  );
};

const Section = ({ projects }) => {
  return (
    <ProjectSection id="projects">
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
    </ProjectSection>
  );
};

export default Section;
