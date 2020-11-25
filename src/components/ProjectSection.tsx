import React from 'react';
import '../styles/ProjectSection.scss';

interface ProjectProps {
  isTemp?: boolean;
}

const ProjectSection: React.FC<ProjectProps> = (props) => {
  const projects = [
    {
      key: '1',
      name: 'Looop Communication System',
      language: ['Javascript', 'Typescript'],
      framework: ['React', 'Node.js'],
    },
    {
      key: '2',
      name: 'Personal Website',
      language: ['Typescript'],
      framework: ['Gatsby', 'Vercel', 'Ant Design'],
    },
    {
      key: '3',
      name: 'Orientamento Website',
      language: ['php'],
      framework: ['Wordpress', 'Skeleton CSS'],
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
              <div className="projectContainer">
                <p className="projectLanguage">
                  Languages: {project.language.join(', ')}
                </p>
                <p className="projectFramework">
                  Framework: {project.framework.join(', ')}
                </p>
                <p className="projectName">{project.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
