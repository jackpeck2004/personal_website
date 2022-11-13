export interface ICharacteristic {
  title: string;
  description: string;
  sectionLinkId?: string;
}

export interface IProject {
  title: string;
  description: string;
  languages: Array<string>;
  frameworks?: Array<string>;
  github?: string;
  live?: string;
  slug: string;
}

export type NavItem = {
  label: string;
  anchorId: string;
};
