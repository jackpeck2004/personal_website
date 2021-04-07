import React from 'react';
import ProjectAccordian from '../projectAccordian';
import { Project } from '../../lib/types';

const Projects: React.FC = () => {
  const [projects, setProjects] = React.useState<Project[]>([
    {
      name: 'Simple Blockchain',
      description:
        "This project is a blockchain implementation created using linked lists based on the information and lecture given to us in the IB CompSci HL course. It was created to check my understanding and in order to better percieve it's possible usages and structure.",
      languages: ['Python'],
      frameworks: [],
      githubUrl: 'https://github.com/jackpeck2004/Blockchain',
    },
    {
      name: 'T.W.I.N Media Center',
      description:
        'A section of the website where the company can display press releases and share them with the investor community.',
      languages: ['php', 'Blade'],
      frameworks: ['WordPress', 'Laravel'],
      projectUrl: 'https://twin.services/media-center',
    },
    {
      name: 'EigenVector Centrality Web Scraper',
      description:
        'A simple web scraper which creates an Eigenvector centrality graph starting from a web page. It saves the graphs to json and reads if already exists. It was started a school project and is not developed personally in free time to expand knowledge on web science algorithms',
      languages: ['Python'],
      frameworks: [],
      githubUrl:
        'https://github.com/jackpeck2004/cs/tree/main/DP1/HL_09_Crawler',
    },
  ]);

  return (
    <div className="mt-32">
      <h2
        id="projects"
        className="font-bold lowercase text-2xl sm:text-4xl md:text-5cl lg:text-6xl xl:text-7xl"
      >
        Projects
      </h2>
      <p className="mt-10">
        {projects.map((project: Project, idx: number) => (
          <ProjectAccordian key={idx} id={idx} project={project} />
        ))}
      </p>
    </div>
  );
};

export default Projects;
