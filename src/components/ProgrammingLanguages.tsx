import React from 'react';
import '../styles/ProgrammingLanguages.scss';

const languages = [
  // {
  //   name: 'HTML',
  //   basic: false,
  // },
  // {
  //   name: 'CSS',
  //   basic: false,
  // },
  {
    name: 'JavaScript',
    basic: false,
  },
  {
    name: 'Typescript',
    basic: false,
  },
  {
    name: 'Python',
    basic: false,
  },
  {
    name: 'Swift',
    basic: true,
  },
  {
    name: 'PHP',
    basic: false,
  },
  {
    name: 'Blade',
    basic: false,
  },
];

const ProgrammingLanguages: React.FC = () => {
  // if (!isMobile) {
  return (
    <div className="ProgrammingLanguages">
      <h2>Programming Languages I Know</h2>
      <ul>
        {languages.map((lang, idx) => {
          if (!lang.basic) return <li>{lang.name}</li>;

          return (
            <li key={idx}>
              {lang.name}
              <br /> (basic)
            </li>
          );
        })}
      </ul>
    </div>
  );
  // }
};

export default ProgrammingLanguages;
