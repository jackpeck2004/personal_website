export interface ICharacteristic {
  title: string;
  description: string;
  sectionLinkId?: string;
}

export interface ISoftwareProject {
  title: string;
  description: string;
  languages: Array<string>;
  frameworks?: Array<string>;
  github?: string;
  live?: string;
  slug: string;
  date: string;
}

export interface IResearchPaper {
  title: string;
  scope: string;
  date: string;
  url: string;
  subject: string;
  type: string;
}

export interface ILanguage {
  language: string;
  understading: string;
  speaking: string;
  writing: string;
}

export interface IDigitalSkill {
  title: string;
  contents: Array<string>;
}

export type NavItem = {
  label: string;
  anchorId?: string;
  href?: string;
};
