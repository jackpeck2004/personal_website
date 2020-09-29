import { MenuOutlined } from "@ant-design/icons"
import React from "react"
import Media from "react-media"
import ContactForm from "../components/Contact"
import Home from "../components/Home"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import Sidebar, { openSidebar, sidebarState } from "../components/Sidebar"
import "../styles/App.scss"
// import Menu from "../components/Menu"
// import { Link } from "gatsby"
// import Image from "../components/image"
// import Layout from "../components/layout"

const IndexPage: React.FC = () => {
  return (
    <Media queries={{ small: { maxWidth: 999 } }}>
      {(matches) =>
        matches.small ? (
          <div>
            <Sidebar initCollapsed={true} />
            <button
              className="openSidebar"
              onClick={() => openSidebar(!sidebarState)}
            >
              <MenuOutlined />
            </button>
            <Layout title="Home">
              <Home />
              <Projects />
              <ContactForm />
            </Layout>
          </div>
        ) : (
          <div>
            <Layout title="Home">
              <Home />
              {/* <Menu /> */}
              <Projects />
              <ContactForm />
            </Layout>
          </div>
        )
      }
    </Media>
  )
}

export default IndexPage
