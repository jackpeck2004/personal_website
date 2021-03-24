import React from 'react';
import { Project } from '../lib/types';

interface AccordianProps {
  project: Project;
  id: number;
}

const ProjectAccordian: React.FC<AccordianProps> = ({ project, id }) => {
  const [show, setShow] = React.useState<bool>(false);

  const [divClasses, setDivClasses] = React.useState<string>(
    'cursor-pointer border-b-2 divide-y py-4'
  );

  React.useEffect(() => {
    if (id === 0) {
      setDivClasses(divClasses + ' border-t-2');
    }
  }, []);

  return (
    <div onClick={() => setShow(!show)} className={divClasses}>
      <div className="lowercase text-3xl flex justify-between items-center mb-3">
        <h3>{project.name}</h3>
        <button>{show ? '-' : '+'}</button>
      </div>
      {show && (
        <div className="animation-none">
          <p>{project.description}</p>
          <div className="mt-4 flex">
            <ul className="list-disc list-inside mr-16">
              <h4 className="font-bold">Langauges:</h4>
              {project.languages.map((language: string, idx: number) => (
                <li key={idx}>{language}</li>
              ))}
            </ul>
            {project.frameworks.length > 0 && (
              <ul className="list-disc list-inside">
                <h4 className="font-bold">Frameworks:</h4>
                {project.frameworks.map((framework: string, idx: number) => (
                  <li key={idx}>{framework}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex mt-4 text-gray-500 underline ">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="mr-4 hover:text-gray-400 transition"
                target="_blank"
                rel="norefferrer"
              >
                GitHub
              </a>
            )}

            {project.projectUrl && (
              <a
                className="hover:text-gray-400 transition"
                href={project.projectUrl}
                target="_blank"
                rel="norefferrer"
              >
                Live
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectAccordian;
