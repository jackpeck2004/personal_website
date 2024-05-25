import {
  ICharacteristic,
  IDigitalSkill,
  ILanguage,
  type Education,
} from "@/lib/types";

export const LANGUAGES: Array<ILanguage> = [
  {
    language: "English",
    understading: "Native",
    speaking: "Native",
    writing: "Native",
  },
  {
    language: "Italian",
    understading: "Native",
    speaking: "Native",
    writing: "Native",
  },
  {
    language: "Spanish",
    understading: "B2",
    speaking: "B2",
    writing: "B2",
  },
];

export const SOFT_SKILLS: Array<string> = [
  "Problem Solving",
  "Analytical Mindset",
  "Aptitude to Research",
  "Team Leadership",
  "Public Speaking",
  "Motivated",
  "Independent",
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
      "Squarespace CMS",
    ],
  },
  {
    title: "Office Tools",
    contents: [
      "Google",
      "Workspace",
      "Microsoft",
      "Office",
      "Windows",
      "MacOS",
    ],
  },
];

export const CHARACTERISTICS: Array<ICharacteristic> = [
  {
    title: "my passions",
    description:
      "computer vision, artificial intelligence, nuclear physics, optics, robotics, web technologies, basketball and culinary culture",
  },
  {
    title: "my education",
    description:
      "Current Computer Science and Engineering student and IB Graduate.",
    sectionLinkId: "education",
  },
  {
    title: "my work experience",
    description: "I'm currently the CTO at T.W.I.N srl",
    sectionLinkId: "experience",
  },
];

export const education: Education[] = [
  {
    title: "BCS Computer Science & Engineering",
    institution: {
      logoUrl:
        "https://yt3.googleusercontent.com/nzeUpplZJNpdhnhh9peZ5tsJxTwfZ6Kz94kZN4tfv40Ts0XKCVMmCeDLPnzz81kronIvMMnhBg=s900-c-k-c0x00ffffff-no-rj",
      name: "Eindhoven University of Technology",
      color: "#c72125",
      location: "Eindhoven, Netherlands",
      url: "https://tue.nl",
    },
    startDate: "Sep 2023",
    endDate: "Ongoing",
    type: "academic",
  },
  {
    title: "Physics (Summer Camp)",
    institution: {
      logoUrl:
        "https://res.cloudinary.com/oxford-summer-courses/image/upload/v1687273084/static/favicon_iaayxh.png",
      name: "Oxford Summer Courses",
      url: "https://oxfordsummercourses.com",
      location: "Oxford, UK",
      color: "#EC7A2D",
    },
    startDate: "2 Jul 2023",
    endDate: "15 Jul 2023",
  },
  {
    title: "International Baccalaureate Diploma",
    institution: {
      logoUrl:
        "https://schools.h-farm.com/wp-content/uploads/2023/09/logo-1.svg",
      name: "H-Farm International School",
      url: "https://schools.h-farm.com/en//venice/ib-programmes/",
      location: "Roncade (TV), Italy",
      color: "#a42336",
    },
    startDate: "1 Sep 2020",
    endDate: "21 May 2022",
    type: "academic",
  },
  {
    startDate: "4 Sep 2021",
    endDate: "4 Sep 2022",
    title: "Leader of the Future",
    institution: {
      name: "The European House - Ambrosetti",
      url: "https://leaderdelfuturo.eu",
      logoUrl:
        "https://delivery.ambrosetti.eu/template/c2o2e/logo-standard.svg",
      color: "#001E60",
      location: "Various locations",
    },
  },
  {
    title: "IB Middle Years Program (High School grades 9 and 10)",
    institution: {
      logoUrl:
        "https://schools.h-farm.com/wp-content/uploads/2023/09/logo-1.svg",
      name: "H-Farm International School",
      url: "https://www.h-farm.com/en/h-farm-school/treviso/middle-school",
      location: "Roncade (TV), Italy",
      color: "#a42336",
    },
    startDate: "4 Sep 2018",
    endDate: "30 Jun 2020",
    type: "academic",
  },

  {
    startDate: "21 Jul 2019",
    endDate: "3 Aug 2019",
    title: "Introduction to Engineering (Summer Camp)",
    institution: {
      name: "Oxford Royale Academy",
      url: "https://www.oxford-royale.com/",
      location: "Oxford, UK",
      logoUrl:
        "https://www.oxford-royale.com/wp-content/themes/ora2021/static/images/ora-stacked-w.svg",
      color: "#18214d",
    },
  },
  {
    startDate: "Summer 2017",
    // endDate: "Summer 2017",
    title: "Special Effects (Adobe After Effects) Summer Camp",
    institution: {
      name: "Digital Native Summer Camp",
      url: "https://plus.h-farm.com/it/sparx",
      logoUrl:
        "https://d2sj0xby2hzqoy.cloudfront.net/hfarm_courses/attachments/data/000/000/175/original/200409-H-farm-Plus-Loghi-_sparx.png",
      color: "#000000",
      location: "Roncade (TV), Italy",
      bg: "black",
    },
  },
  {
    startDate: "Summer 2016",
    // endDate: "Summer 2016",
    title: "Digital Fabrication Summer Camp",
    institution: {
      name: "Digital Native Summer Camp",
      url: "https://plus.h-farm.com/it/sparx",
      logoUrl:
        "https://d2sj0xby2hzqoy.cloudfront.net/hfarm_courses/attachments/data/000/000/175/original/200409-H-farm-Plus-Loghi-_sparx.png",
      color: "#000000",
      location: "Roncade (TV), Italy",
      bg: "black",
    },
  },
  {
    startDate: "Summer 2015",
    // endDate: "Summer 2015",
    title: "Electronics Summer Camp",
    institution: {
      name: "Digital Native Summer Camp",
      url: "https://plus.h-farm.com/it/sparx",
      logoUrl:
        "https://d2sj0xby2hzqoy.cloudfront.net/hfarm_courses/attachments/data/000/000/175/original/200409-H-farm-Plus-Loghi-_sparx.png",
      color: "#000000",
      location: "Roncade (TV), Italy",
      bg: "black",
    },
  },
  {
    startDate: "Summer 2015",
    // endDate: "Summer 2015",
    title: "Makers Summer Camp",
    institution: {
      name: "Digital Native Summer Camp",
      url: "https://plus.h-farm.com/it/sparx",
      logoUrl:
        "https://d2sj0xby2hzqoy.cloudfront.net/hfarm_courses/attachments/data/000/000/175/original/200409-H-farm-Plus-Loghi-_sparx.png",
      color: "#000000",
      location: "Roncade (TV), Italy",
      bg: "black",
    },
  },
];
