import React from "react"
import "../styles/Projects.scss"

const Projects = () => {
  return (
    <div className="Grid" id="projects">
      <div className="AboutMe">
        <h1>About</h1>
        <div className="WhoAmI">
          <div className="image"></div>
          <h2>Who am I?</h2>
          <p>
            I'm a high-school student @{" "}
            <span className="link">H-International School of Treviso</span>, but
            at the same time I am the CTO of{" "}
            <span className="link">T.W.I.N srl</span>
          </p>
        </div>
        {/* <div className="FavStack">
                 <h2>Favourite Stack</h2>
                 <ul>
                     <li>React</li>
                     <li>Node</li>
                     <li>Express</li>
                     <li>MySQL/MongoDB</li>
                     <li>Typescript</li>
                     <li>Git</li>
                 </ul>
             </div> */}
        <div className="ProgrammingLanguages">
          <h2>Programmig Languages I Know</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>
              Swift
              <br /> (Basic)
            </li>
            <li>
              C++ <br />
              (Basic)
            </li>
          </ul>
        </div>
      </div>
      <section className="projects">
        <h1>Projects Coming Soon...</h1>
      </section>
    </div>
  )
}

export default Projects
