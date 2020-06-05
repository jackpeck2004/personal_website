import React from "react"
import "../styles/Projects.scss"
import { Link } from "gatsby"
import Img from "gatsby-image"
import img from "../images/GiacomoPasin.jpeg"

const languages = [
  {
    "name": "HTML",
    "basic": false
  },
  {
    "name": "CSS",
    "basic": false
  },
  {
    "name": "JavaScript",
    "basic": false
  },
  {
    "name": "Python",
    "basic": false
  },
  {
    "name": "Swift",
    "basic": true
  },
  {
    "name": "C++",
    "basic": true
  }
]

const ProgrammingLanguages = ({ mobile }) => {
  if (!mobile) {
    return (
      <div className="ProgrammingLanguages">
        <h2>Programmig Languages I Know</h2>
        <ul>
          {languages.map((lang, idx) => {
            if (!lang.basic) return <li>{lang.name}</li>

            return (
              <li>{lang.name}<br /> (basic)</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const Projects = () => {
  return (
    <div className="Grid" id="projects">
      <div className="AboutMe">
        <h1>About</h1>
        <div className="WhoAmI">
          {/* <div className="image"></div> */}
          <img src={img} className="image"/>
          <h2>Who am I?</h2>
          <p>
            I'm a high-school student @{" "}
            <a href="https://h-is.com" className="link" target="_blank">H-International School of Treviso</a>, but
            at the same time I am the CTO of{" "}
            <a href="https://twin.services" className="link" target="_blank">T.W.I.N srl</a>
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

        <ProgrammingLanguages mobile={false} />

      </div>
      <section className="projects">
        <h1>Projects Coming Soon...</h1>
      </section>
    </div>
  )
}

export default Projects
