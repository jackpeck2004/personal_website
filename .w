import { Table } from 'antd';
import React from 'react';
import '../styles/ProjectSection.scss';

interface ProjectProps {
  isTemp?: boolean;
}

const templates = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Language',
    dataIndex: 'language',
    key: 'lang',
    render: (langs: Array<string>) => (
      <ul>
        {langs.map((lang: string) => (
          <li>{lang}</li>
        ))}
      </ul>
    ),
  },
  {
    title: 'Framework',
    dataIndex: 'framework',
    key: 'framework',
    render: (frameworks: Array<string>) => (
      <ul>
        {frameworks.map((fw: string) => (
          <li>{fw}</li>
        ))}
      </ul>
    ),
  },
];

const ProjectSection: React.FC<ProjectProps> = (props) => {
  const [projects] = React.useState([
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
  ]);
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
      {/* <Table data={data}></Table> */}
      {/*<Table className="table" dataSource={projects} columns={templates} />*/}
      <table>
        <thead>
          <td>Name</td>
          <td>Language</td>
          <td>Framework</td>
        </thead>
        <tbody>
          {projects.map((project: any) => {
            <tr>
              <td>{project.name}</td>
              <td>
                <ul>
                  <li>test</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>test</li>
                </ul>
              </td>
            </tr>;
          })}
        </tbody>
      </table>
    </section>
  );
};

export default ProjectSection;
