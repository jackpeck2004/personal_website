// import Link from "next/link";
import { DownloadCVButton, LineDivider, Section } from "@/components/common";
import { Characteristics, Projects } from "@/components/partials";
import { Education } from "@/components/partials/education";
import { Experience } from "@/components/partials/experience";
import constants from "@/lib/constants";
import { useMediaQuery } from "@/lib/hooks";
import { ICharacteristic, IProject, ILanguage } from "@/lib/types";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

const LANGUAGES: Array<ILanguage> = [
{
language: "English",
understading: "Native",
speaking: "Native",
writing: "Native",
},
{
language: "Italian",
understading: "Native",
speaking: "Native",
writing: "Native",
},
{
language: "Spanish",
understading: "B2",
speaking: "B2",
writing: "B2",
},
]

const CHARACTERISTICS: Array<ICharacteristic> = [
  {
    title: "my passions",
    description:
      "computer vision, artificial intelligence, nuclear physics, optics, robotics, web technologies, basketball and culinary culture"
  },
  {
    title: "my education",
    description:
      "Recieved IB Diploma with a score of 40. Subjects taken include HL Physics, HL Maths, and HL CompSci",
    sectionLinkId: "education"
  },
  {
    title: "my work experience",
    description: "I'm currently the CTO at T.W.I.N srl",
    sectionLinkId: "experience"
  }
];

const Page: NextPage = ({
  projects
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const isDesktop = useMediaQuery(constants.mediaQueries.IS_XLARGE);

  return (
    <div
      className="min-h-[94vh] bg-white text-black py-[2vh] w-screen overflow-hidden"
      id="home"
    >
      <div className="px-4 lg:px-52">
        <h1 className="2xl:text-9xl lg:text-6xl text-5xl font-bold pt-[20vh]">
          I&apos;m Giacomo Pasin. <br /> IB Graduate and <br /> STEM Enthusiast
        </h1>
        <Characteristics characteristics={CHARACTERISTICS} />
        {!isDesktop ? (
          <section className="my-4 flex justify-center">
            <DownloadCVButton />
          </section>
        ) : null}
        <Projects projects={projects} />
        <Section title="Work Experience" sectionId="experience">
          <Experience
            startDate="8 Aug 2021"
            endDate="current"
            city="Treviso, Italy"
            role="CTO"
            company="T.W.I.N srl"
            companyUrl="https://twin.services"
          >
            <p>
              Upgrade existing technology infrastructures, organize digital
              permissions and update programs to adhere to GDPR and privacy
              standards, handle setup and maintenance of software platforms and
              integrate new technologies into the workflow of the company to
              enhance productivity of employees.
            </p>
          </Experience>
          <Experience
            startDate="4 Sept 2019"
            endDate="8 Aug 2021"
            city="Treviso, Italy"
            role="Junior Technology and Web Designer"
            company="T.W.I.N srl"
            companyUrl="https://twin.services"
          >
            <p>
              Organize new network infrastructures and secure file sharing
              options, setting up Google Workspace for the whole company,
              configure new domains and website addresses, create software
              platforms, website designs and design algorithms to simplify the
              workflows of other employees.
            </p>
          </Experience>
        </Section>
        <Section title="Education and Training" sectionId="education">
          <Education
            startDate="1 Sep 2020"
            endDate="21 May 2022"
            city="Roncade, Italy"
            title="International Baccalaureate Diploma"
            school="International School of Talents - Multicampus"
            schoolUrl="https://www.h-farm.com/it/education/h-farm-school"
          >
            <p>
              Final Score: 40 Subjects Taken:
              <ul>
                <li>
                  Higher Level Mathematics Analysis and Approaches (6 out of 7)
                </li>
                <li>Higher Level Physics (7 out of 7)</li>
                <li>Higher Level Computer Science (7 out of 7)</li>
                <li>Economics (6 out of 7)</li>
                <li>Spanish B (7 out of 7)</li>
                <li>English A Language and Literature (6 out of 7)</li>
              </ul>
              <em>+1 extra core point</em>
            </p>
          </Education>
          <Education
            startDate="4 Sep 2018"
            endDate="30 Jun 2020"
            city="Roncade, Italy"
            title="IB Middle Years Program (High School grades 9 and 10)"
            school="H-Farm International School - Treviso"
            schoolUrl="https://www.h-farm.com/en/h-farm-school/treviso/middle-school"
          ></Education>
          <Education
            startDate="4 Sep 2021"
            endDate="Current"
            title="Leader of the Future"
            school="The European House - Ambrosetti"
            schoolUrl="https://leaderdelfuturo.eu"
          ></Education>
        </Section>
        <Section title="Language skills">
            <div className="flex justify-center">
            <table className="w-[80%]">
                <thead className="">
                    <tr className="border-b border-gray-300">
                        {Object.keys(LANGUAGES[0]).map((k) => (
                        <th key={k} className="capitalize pt-4 pb-2 pr-4 text-left">{k}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                {LANGUAGES.map((language) => {
                    return (
                        <tr key={language.language}>
                            <td className="text-blue-500 font-bold pt-2">{language.language}</td>
                            <td>{language.understading}</td>
                            <td>{language.speaking}</td>
                            <td>{language.writing}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            </div>
        </Section>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const filePath = "_content/projects";
  const files = fs.readdirSync(filePath);

  const projects: Array<IProject> = files
    .map((file): IProject => {
      const data = fs.readFileSync(`${filePath}/${file}`).toString();

      const d = matter(data).data;

      let frameworks: Array<string> = [];
      if (d.frameworks) frameworks = d.frameworks.split(", ");

      let languages: Array<string> = [];
      if (d.languages) languages = d.languages.split(", ");

      if (frameworks.length) delete d["frameworks"];
      if (languages.length) delete d["languages"];

      const f = {
        ...d,
        frameworks,
        languages
      };

      return {
        ...f,
        slug: file.split(".")[0]
      } as IProject;
    })
    .sort((a, b) => (b.title < a.title ? 1 : -1));

  return {
    props: {
      projects
    }
  };
};

export default Page;
