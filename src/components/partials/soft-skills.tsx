import { LineDivider, Section } from "@/components/common";
import { FC } from "react";

interface ISoftSkillsSectionProps {
  skills: Array<string>;
}

export const SoftSkillsSection: FC<ISoftSkillsSectionProps> = ({ skills }) => {
  return (
    <Section title="Soft Skills">
      <div className="py-4">
        <h4 className="font-bold inline text-2xl">My soft skills include:</h4>
        <LineDivider />
        <ul className="md:columns-2 list-inside">
          {skills.map((skill) => (
            <li key={skill.split(" ").join("-").toLowerCase()}>{skill}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
