import styled from "@emotion/styled";
import { SubHeading } from "../common/headings";
import { Card } from "react-bootstrap";

const ProjectSection = styled.section`
  margin-top: 10vh;
`;

const Projects = styled.div`
  margin-top: 2vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 40px;
`;

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
