import { Section, LineDivider } from "@/components/common";
import { SOFT_SKILLS } from "@/lib/contents";

export function SoftSkillsSection() {
  return (
    <Section title="Soft Skills">
      <div className="py-4">
        <h4 className="font-bold inline text-2xl">My soft skills include:</h4>
        <LineDivider />
        <ul className="md:columns-2 list-inside">
          {SOFT_SKILLS.map((skill) => (
            <li key={skill.split(" ").join("-").toLowerCase()}>{skill}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
