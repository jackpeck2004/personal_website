import styled from "@emotion/styled";
import { SubHeading } from "../common/headings";
import { Card, Button } from "react-bootstrap";

const ProjectSection = styled.section`
  margin-top: 10vh;
	display: grid;
	grid-template-columns; 1fr 1fr 1fr;
	grid-column-gap: 100px;
`;

const Project = () => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
);

const Projects = () => {
  return (
    <ProjectSection id="projects">
      <SubHeading>Projects</SubHeading>
      <Projects>
        <Project />
      </Projects>
    </ProjectSection>
  );
};

export default Projects;
