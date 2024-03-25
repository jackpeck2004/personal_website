export interface ICharacteristic {
	title: string;
	description: string;
	sectionLinkId?: string;
}

export interface ISoftwareProject {
	title: string;
	description: string;
	date: Date;
	languages: Array<string>;
	frameworks: Array<string>;
	github?: string;
	live?: string;
	slug: string;
}

export interface ISoftwareProjectPreview {
	title: string;
	date: Date;
	languages: Array<string>;
	frameworks: Array<string>;
	slug: string;
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
	anchorId: string;
};

export type ScrollState = {
	isLocked: boolean;
	scrollX: number;
	scrollY: number;
};

export type Education = {
    title: string;
    institution: {
        logoUrl: string;
        name: string;
        url: string;
        location: string;
        bg?: string;
        color: string;
    };
    description?: any;
    startDate: string;
    endDate: string;
}
