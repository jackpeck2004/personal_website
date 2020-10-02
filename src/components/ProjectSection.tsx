import React from "react"
import "../styles/ProjectSection.scss"

interface ProjectProps {
<<<<<<< HEAD
  isTmp: boolean
}

const ProjectSection: React.FC<ProjectProps> = (props) => {
  if (props.isTmp === true) {
    return (
      <section className="projects">
=======
  isTemp: boolean
}

const data = {
  head: ["H1", "H2", "H3"],
  body: [
    ["1", "2", "3"],
    ["ciao", "ciao", "ciao"],
  ],
}

const ProjectSection: React.FC<ProjectProps> = (props) => {
  if (props.isTemp) {
    return (
      <section className="projects-tmp">
>>>>>>> 01_Projects
        <h1>Projects Coming Soon...</h1>
      </section>
    )
  }
<<<<<<< HEAD

  return (
    <section className="projects">
      <h1>Propjects</h1>
=======
  return (
    <section className="projects">
      <h1>Hello</h1>
      <table>
        <thead>
          {data.head.map((value: String) => (
            <td>{value}</td>
          ))}
        </thead>
        <tbody>
          {data.body.map((row: Array<String>) => (
            <tr>
              {row.map((value: String) => (
                <td>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
>>>>>>> 01_Projects
    </section>
  )
}

export default ProjectSection
