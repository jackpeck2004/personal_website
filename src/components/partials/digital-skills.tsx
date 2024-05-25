import { LineDivider, Section } from "@/components/common";
import { IDigitalSkill } from "@/lib/types";
import { FC } from "react";

interface IDigitalSkillsSectionProps {
  skills: Array<IDigitalSkill>;
}

export const DigitalSkillsSection: FC<IDigitalSkillsSectionProps> = ({
  skills,
}) => {
  return (
    <Section title="Digital Skills">
      {skills.sort().map((skill) => (
        <div
          className="py-4"
          key={skill.title.split(" ").join("-").toLowerCase()}
        >
          <h4 className="font-bold inline text-2xl">{skill.title}</h4>
          <LineDivider />
          <p>{skill.contents.join(", ")}</p>
        </div>
      ))}
    </Section>
  );
};
