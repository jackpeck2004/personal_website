import { ILanguage, ICharacteristic, IDigitalSkill } from "@/lib/types";

export const LANGUAGES: Array<ILanguage> = [
  {
    language: "English",
    understading: "Native",
    speaking: "Native",
    writing: "Native"
  },
  {
    language: "Italian",
    understading: "Native",
    speaking: "Native",
    writing: "Native"
  },
  {
    language: "Spanish",
    understading: "B2",
    speaking: "B2",
    writing: "B2"
  }
];

export const SOFT_SKILLS: Array<string> = [
  "Problem Solving",
  "Analytical Mindset",
  "Aptitude to Research",
  "Team Leadership",
  "Public Speaking",
  "Motivated",
  "Independent"
];

export const DIGITAL_SKILLS: Array<IDigitalSkill> = [
  {
    title: "Programming Languages and Technologies",
    contents: [
      "TypeScript",
      "CSS",
      "JavaScript",
      "JSON",
      "Jupyter Notebooks",
      "Python",
      "Git",
      "Docker",
      "Linux",
      "HTML",
      "Postman",
      "GitHub Redis",
      "MongoDB",
      "WordPress",
      "Blade",
      "php",
      "Squarespace CMS"
    ]
  },
  {
    title: "Office Tools",
    contents: ["Google", "Workspace", "Microsoft", "Office", "Windows", "MacOS"]
  }
];

export const CHARACTERISTICS: Array<ICharacteristic> = [
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

