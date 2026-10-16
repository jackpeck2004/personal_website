import skills from "@/data/skills.json";
import { ILanguage, ICharacteristic, IDigitalSkill } from "@/lib/types";

export const LANGUAGES: Array<ILanguage> = skills.languages;

export const SOFT_SKILLS: Array<string> = [
  "Problem Solving",
  "Analytical Mindset",
  "Aptitude to Research",
  "Team Leadership",
  "Public Speaking",
  "Motivated",
  "Independent"
];

export const DIGITAL_SKILLS: Array<IDigitalSkill> = skills.digitalSkills;

export const CHARACTERISTICS: Array<ICharacteristic> = [
  {
    title: "my passions",
    description:
      "computer vision, artificial intelligence, nuclear physics, optics, robotics, web technologies, basketball and culinary culture"
  },
  {
    title: "my education",
    description:
      "MSc Computer Science student at ETH Zürich and Cum Laude BSc graduate from TU Eindhoven.",
    sectionLinkId: "education"
  },
  {
    title: "my work experience",
    description: "I'm currently the CTO at My Twin Communication",
    sectionLinkId: "experience"
  }
];
