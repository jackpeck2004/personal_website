import React from 'react';
import '../styles/Projects.scss';
import ProgrammingLanguages from './ProgrammingLanguages';
import ProjectSection from './ProjectSection';
import WhoAmI from './WhoAmI';

const Projects = () => {
  return (
    <div className="Grid" id="projects">
      <div className="AboutMe">
        <h1>About</h1>
        <div className="container">
          <WhoAmI />
          <ProgrammingLanguages />
        </div>
      </div>
      <ProjectSection isTemp />
    </div>
  );
};

export default Projects;
