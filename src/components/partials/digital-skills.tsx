import { Section, LineDivider } from "@/components/common";
import { DIGITAL_SKILLS } from "@/lib/contents";

export function DigitalSkillsSection() {
  return (
    <Section title="Digital Skills">
      {DIGITAL_SKILLS.sort().map((skill) => (
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
