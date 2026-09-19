import { Section } from "@/components/common";
import { DIGITAL_SKILLS, LANGUAGES, SOFT_SKILLS } from "@/lib/contents";

function SkillGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2 border-t border-gray-200 py-5 md:grid-cols-[11rem_1fr] md:gap-6">
      <h3 className="text-sm font-medium text-gray-600 md:pt-1">{title}</h3>
      <div>{children}</div>
    </div>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function SkillsSection() {
  return (
    <Section title="Skills" sectionId="skills">
      <SkillGroup title="Languages">
        <ul className="grid gap-x-6 gap-y-1 text-[15px] sm:grid-cols-3">
          {LANGUAGES.map(({ language, speaking }) => (
            <li key={language}>
              <span className="font-semibold">{language}</span>{" "}
              <span className="text-gray-500">· {speaking}</span>
            </li>
          ))}
        </ul>
      </SkillGroup>
      {DIGITAL_SKILLS.map((skill) => (
        <SkillGroup key={skill.title} title={skill.title}>
          <Chips items={skill.contents} />
        </SkillGroup>
      ))}
      <SkillGroup title="Soft skills">
        <Chips items={SOFT_SKILLS} />
      </SkillGroup>
    </Section>
  );
}
