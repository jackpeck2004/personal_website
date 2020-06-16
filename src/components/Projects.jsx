import React from "react"
import "../styles/Projects.scss"
import ProgrammingLanguages from "./ProgrammingLanguages"
import WhoAmI from "./WhoAmI"

const Projects = () => {
  return (
    <div className="Grid" id="projects">
      <div className="AboutMe">
        <h1>About</h1>
        <WhoAmI />
        <ProgrammingLanguages mobile={false} />
        {/* <ProjectSection /> */}
        {/* <section>
          <h1>Projects coming soon</h1>
        </section> */}
      </div>
    </div>
  )
}

export default Projects
