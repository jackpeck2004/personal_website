import { Section } from "@/components/common";
import { LANGUAGES } from "@/lib/contents";

export function LanguageSkillsSection() {
  return (
    <Section title="Language skills" sectionId="skills">
      <div className="flex justify-center">
        <table className="w-full lg:w-[80%]">
          <thead className="">
            <tr className="border-b border-gray-300">
              {Object.keys(LANGUAGES[0]).map((k) => (
                <th key={k} className="capitalize pt-4 pb-2 pr-4 text-left">
                  {k}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {LANGUAGES.sort().map((language) => (
              <tr key={language.language}>
                <td className="text-blue-500 font-bold pt-2">
                  {language.language}
                </td>
                <td>{language.understading}</td>
                <td>{language.speaking}</td>
                <td>{language.writing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
};
