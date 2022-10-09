// import Link from "next/link";
import matter from "gray-matter";
import fs from "fs";
import { Characteristics, Projects } from "@/components/partials";
import { Section } from "@/components/common";
import { ICharacteristic } from "@/lib/types";
import { Experience } from "@/components/partials/experience";

const CHARACTERISTICS: Array<ICharacteristic> = [
  {
    title: "my passions",
    description: "software development, engineering, technology, basketball and food"
  },
  {
    title: "my education",
    description: "Recieved IB Diploma with a score of 40. Subjects taken include HL Physics, HL Maths, and HL CompSci",
    sectionLinkId: "education"
  },
  {
    title: "my work experience",
    description: "I'm currently the CTO at T.W.I.N srl",
    sectionLinkId: "experience"
  }
];

const Page = ({ projects }) => {

  return (
    <div className="min-h-[94vh] bg-white text-black py-[2vh]" id="home">
      <div className="px-4 lg:px-52">
        <h1 className="2xl:text-9xl lg:text-6xl gr-5xl font-bold pt-[20vh]">
          I&apos;m Giacomo Pasin. <br /> IB Graduate and <br /> Software
          Developer
        </h1>
        <Characteristics characteristics={CHARACTERISTICS} />
        <Projects projects={projects} />
        <Section title="Work Experience" sectionId="experience">
          <Experience startDate="8 Aug 2021" endDate="current" city="Treviso, Italy" role="CTO" company="T.W.I.N srl">
            <p>Upgrade existing technology infrastructures, organize digital permissions and update programs to adhere to
              GDPR and privacy standards, handle setup and maintenance of software platforms and integrate new
              technologies into the workflow of the company to enhance productivity of employees.
            </p>
          </Experience>
          <Experience startDate="4 Sept 2019" endDate="8 Aug 2022" city="Treviso, Italy" role="Junior Technology and Web Designer" company="T.W.I.N srl">
            <p>
              Organize new network infrastructures and secure file sharing options, setting up Google Workspace for the
              whole company, configure new domains and website addresses, create software platforms, website designs
              and design algorithms to simplify the workflows of other employees.
            </p>
          </Experience>
        </Section>

        <section id="education" className="pt-[20vh]">
          <h2>Education</h2>
        </section>
      </div>
    </div>
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
