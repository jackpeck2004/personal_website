import React from "react"
import "../styles/ProjectSection.scss"

interface ProjectProps {
  isTmp: boolean
}

const ProjectSection: React.FC<ProjectProps> = (props) => {
  if (props.isTmp === true) {
    return (
      <section className="projects">
        <h1>Projects Coming Soon...</h1>
      </section>
    )
  }

  return (
    <section className="projects">
      <h1>Propjects</h1>
    </section>
  )
}

export default ProjectSection
