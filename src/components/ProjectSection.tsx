import React from "react";
import "../styles/ProjectSection.scss";

interface ProjectProps {
  isTemp?: boolean;
}

interface CardProps {
  project: any;
}

const ProjectCard: React.FC<CardProps> = ({ project }) => {
  return (
    <div className="projectContainer">
      <p className="projectLanguage">
        Languages: {project.language.join(", ")}
      </p>
      <p className="projectFramework">
        Framework: {project.framework.join(", ")}
      </p>
      <p className="projectName">{project.name}</p>
    </div>
  );
};

const ProjectSection: React.FC<ProjectProps> = (props) => {
  const projects = [
    {
      key: "1",
      name: "Looop Communication System",
      language: ["Javascript", "Typescript"],
      framework: ["React", "Node.js"],
      link: null,
    },
    {
      key: "2",
      name: "Personal Website",
      language: ["Typescript"],
      framework: ["Gatsby", "Vercel", "Ant Design"],
      link: null,
    },
    {
      key: "3",
      name: "Orientamento Website",
      language: ["php"],
      framework: ["Wordpress", "Skeleton CSS"],
      link: "https://dev-orientamento.pantheonsite.io",
    },
    {
      key: "4",
      name: "T.W.I.N Media Center",
      language: ["php", "blade"],
      framework: ["Wordpress", "Laravel"],
      link: "https://twin.services/it/media-center",
    },
  ];

  if (props.isTemp) {
    return (
      <section className="projects-tmp">
        <h1>Projects Coming Soon...</h1>
      </section>
    );
  }

  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="projectDisplay">
        {projects.map((project, i) => {
          return (
            <div className="project" key={i}>
              {project.link ? (
                <a
                  href={project.link}
                  className="projectLink"
                  rel="noreferrer"
                  target="_blank"
                >
                  <ProjectCard project={project} />
                </a>
              ) : (
                <ProjectCard project={project} />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
