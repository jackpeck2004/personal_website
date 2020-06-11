import { Link } from 'gatsby'
import scrollTo from "gatsby-plugin-smoothscroll"
import React from 'react'
import '../styles/Menu.scss'

const Menu = () => {
  return (
    <div className="menu">
      <div className="header">
        <Link to="/" className="logo">
          Giacomo Pasin
        </Link>
        <nav>
          <ul className="nav__links">
            <li>
              <a className="nav_link" onClick={() => scrollTo("#projects")}>About</a>
            </li>
            <li>
              <a className="nav_link" onClick={() => scrollTo(".projects")}>Projects</a>
            </li>
            <li>
              <Link className="nav_link" to="/covid19">Covid19</Link>
            </li>
          </ul>
        </nav>
        {/* <Link className="cta" to="/contact">
          Contact
        </Link> */}
        <a className="cta" onClick={() => scrollTo("#contactForm")}>
          Contact
        </a>
        {/* <p class="menu cta">Menu</p> */}
      </div>
    </div>
    // <div className="menu">
    //     <h1>Ciao</h1>
    //     <header>
    //         <h1>Header</h1>
    // </div>
  )
}

export default Menu
