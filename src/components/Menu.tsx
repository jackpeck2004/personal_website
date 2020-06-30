import { Link } from 'gatsby'
import scrollTo from "gatsby-plugin-smoothscroll"
import React from 'react'
import '../styles/Menu.scss'
import { openSidebar, sidebarState } from "./Sidebar"

const st = (target: string) => {
  scrollTo(target)
  openSidebar(!sidebarState)

}

export const Links = () => (
  <nav>
    <ul className="nav__links">
      <li>
        <a className="nav_link" onClick={() => st(".Home")}>Home</a>
      </li>
      <li>
        <a className="nav_link" onClick={() => st("#projects")}>About</a>
      </li>
      <li>
        <a className="nav_link" onClick={() => st(".projects")}>Projects</a>
      </li>
    </ul>
  </nav>
)

const Menu = () => (
  <div className="menu">
    <div className="header">
      <Link to="/" className="logo">
        Giacomo Pasin
          </Link>
      <Links />
      <a className="cta" onClick={() => scrollTo("#contactForm")}>
        Contact
        </a>
    </div>
  </div>
)

export default Menu 
