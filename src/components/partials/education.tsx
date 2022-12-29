import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { Section, LineDivider } from "@/components/common";

interface IEducationProps {
  startDate: string;
  endDate: string;
  city?: string;
  title: string;
  school: string;
  schoolUrl: string;
}

const Education: FC<PropsWithChildren<IEducationProps>> = ({
  startDate,
  endDate,
  city,
  title,
  school,
  schoolUrl,
  children
}) => {
  return (
    <div className="py-4 ">
      <span className="block text-gray-400 uppercase">
        {startDate} – {endDate}
      </span>
      {city && <span className="block text-gray-400">{city}</span>}
      <span className="text-2xl">
        <h4 className="font-bold inline">{title} – </h4>
        <Link href={schoolUrl} passHref>
          <a className="link" target={"_blank"}>
            {school}
          </a>
        </Link>
      </span>
      <LineDivider />
      {children}
      <p className="pt-4 truncate">
        <span className="font-bold">Website </span>
        <Link href={schoolUrl} passHref>
          <a className="link" target={"_blank"}>
            {schoolUrl}
          </a>
        </Link>
      </p>
    </div>
  );
};

export const EducationSection = () => {
  return (
    <Section title="Education and Training" sectionId="education">
      <Education
        startDate="1 Sep 2020"
        endDate="21 May 2022"
        city="Roncade, Italy"
        title="International Baccalaureate Diploma"
        school="International School of Talents - Multicampus"
        schoolUrl="https://www.h-farm.com/it/education/h-farm-school"
      >
        <p className="text-black prose">
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
      >
        <p>Community Member</p>
      </Education>
      <Education
        startDate="21 Jul 2019"
        endDate="3 Aug 2019"
        title="Introduction to Engineering (Summer Camp)"
        school="Oxford Royale Academy"
        schoolUrl="https://www.oxford-royale.com/"
        city="Oxford, UK"
      ></Education>
      <Education
        startDate="22 May 2017"
        endDate="26 May 2017"
        title="Curso de Lengua y Conversación"
        school="Enforex"
        schoolUrl="https://enforex.es"
        city="Salamanca, Spain"
      >
        <p className="text-black prose">
          Evaluation:
          <ul>
            <li>Langauge contents: 9/10</li>
            <li>Vocabulary: 8/10</li>
            <li>Listening comprehension: 9/10</li>
            <li>Reading comprehension: 9/10</li>
            <li>Spaking expression: 8/10</li>
            <li>Written expression: 8/10</li>
            <li>Pronounciation: 9/10</li>
            <li>Sociocultural understanding: 9/10</li>
          </ul>
          <em>Total: Level C1</em>
        </p>
      </Education>
      <Education
        startDate="Summer 2017"
        endDate="Summer 2017"
        title="Special Effects (Adobe After Effects) Summer Camp"
        school="Sparx Camps"
        schoolUrl="https://courses.h-farm.com/sparx-summer-camp/"
      ></Education>
      <Education
        startDate="Summer 2016"
        endDate="Summer 2016"
        title="Digital Fabrication Summer Camp"
        school="H-Farm Digital Summer Camps"
        schoolUrl="https://courses.h-farm.com/sparx-summer-camp/"
      ></Education>
      <Education
        startDate="Summer 2015"
        endDate="Summer 2015"
        title="Electronics Summer Camp"
        school="Digital Native Summer Camp"
        schoolUrl="https://courses.h-farm.com/sparx-summer-camp/"
      ></Education>
      <Education
        startDate="Summer 2015"
        endDate="Summer 2015"
        title="Makers Summer Camp"
        school="Digital Nativa Summer Camp"
        schoolUrl="https://courses.h-farm.com/sparx-summer-camp/"
      ></Education>
    </Section>
  );
};
