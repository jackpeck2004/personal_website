import Link from "next/link";
import matter from "gray-matter";
import fs from "fs";
import Projects from "../components/partials/projects";
import { Title } from "../components/common/headings";
import styled from "@emotion/styled";
import { Container } from "react-bootstrap";

const Body = styled.div`
  background: ${(props) => props.theme.colors.primaryBackground};
  min-height: 94vh;
  color: ${(props) => props.theme.colors.primary};
  padding: 2vh 0;
`;

const Characteristics = styled.div`
  margin-top: 5vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
`;

const Characteristic = styled.div`
  border-top: 3px solid ${(props) => props.theme.colors.muted};
`;

const CharTitle = styled.h3`
  margin-top: 10px;
`;

const Anchor = styled.a`
  color: ${(props) => props.theme.colors.primary};
`;

const Page = ({ projects }) => {

  return (
    <Body id="home">
      {/*Index page, this will be the page loaded when you type /*/}
      <Container>
        <Title>
          I&apos;m Giacomo Pasin. <br /> IB Student and <br /> Software
          Developer
        </Title>
        <Characteristics>
          <Characteristic>
            <CharTitle>my passions</CharTitle>
            <span>
              software development, electrical engineering, technology,
              basketball and food
            </span>
          </Characteristic>
          <Characteristic>
            <CharTitle>my academics</CharTitle>
            <span>
              currently in ib diploma program studying physics hl, compsci hl
              and maths hl
            </span>
          </Characteristic>
          <Characteristic>
            <CharTitle>my work experience</CharTitle>
            <span>
              i&apos;m currently the chief technology officer at{" "}
              <Link href="https://twin.services" passHref={true}>
                <Anchor target="_blank">T.W.I.N srl</Anchor>
              </Link>
            </span>
          </Characteristic>
        </Characteristics>
        <Projects projects={projects} />
      </Container>
    </Body>
  );
};

export async function getStaticProps() {
  const filePath = "_content/projects";
  const files = fs.readdirSync(filePath);

  const projects = files
    .map((file) => {
      const data = fs.readFileSync(`${filePath}/${file}`).toString();

      const d = matter(data).data;

      let frameworks = [];
      if (d.frameworks) frameworks = d.frameworks.split(", ");

      let languages = [];
      if (d.languages) languages = d.languages.split(", ");

      if (frameworks.length) delete d["frameworks"];
      if (languages.length) delete d["languages"];

      const f = {
        frameworks,
        languages,
        ...d
      };

      return {
        ...f,
        slug: file.split(".")[0]
      };
    })
    .sort((a, b) => b.title < a.title);

  return {
    props: {
      projects
    }
  };
}

export default Page;
