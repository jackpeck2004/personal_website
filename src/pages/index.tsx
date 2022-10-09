// import Link from "next/link";
import matter from "gray-matter";
import fs from "fs";
import { Characteristics, Projects} from "@/components/partials";
import { ICharacteristic } from "@/lib/types";

const CHARACTERISTICS: Array<ICharacteristic> = [
  {
    title: "my passions",
    description: "software development, engineering, technology, basketball and food"
  },
  {
    title: "my academics",
    description: "Recieved IB Diploma with a score of 40. Subjects taken include HL Physics, HL Maths, and HL CompSci"
  },
  {
    title: "my work experience",
    description: "I'm currently the CTO at T.W.I.N srl"
  }
];

const Page = ({ projects }) => {

  return (
    <div className="min-h-[94vh] bg-white text-black py-[2vh]" id="home">
      <div className="px-4 lg:px-52">
        <h1 className="2xl:text-9xl xl:text-6xl text-5xl">
          I&apos;m Giacomo Pasin. <br /> IB Graduate and <br /> Software
          Developer
        </h1>
        <Characteristics characteristics={CHARACTERISTICS} />
        <Projects projects={projects} />
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
