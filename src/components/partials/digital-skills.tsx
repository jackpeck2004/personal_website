import { FC } from "react";
import { Section, LineDivider } from "@/components/common";
import { IDigitalSkill } from "@/lib/types";

interface IDigitalSkillsSectionProps {
  skills: Array<IDigitalSkill>;
}

export const DigitalSkillsSection: FC<IDigitalSkillsSectionProps> = ({
  skills
}) => {
  return (
    <Section title="Digital Skills">
      {skills.map((skill) => (
        <div className="py-4">
          <h4 className="font-bold inline text-2xl">{skill.title}</h4>
          <LineDivider />
          <p>{skill.contents.join(", ")}</p>
        </div>
      ))}
    </Section>
  );
};