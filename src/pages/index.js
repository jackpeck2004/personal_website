import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
import { Layout } from "antd"
// import Image from "../components/image"
import "../styles/App.scss"
import SEO from "../components/seo"

import Home from "../components/Home"
import Projects from "../components/Projects"
import Menu from "../components/Menu"
import ContactForm from '../components/Contact'

const { Footer, Content } = Layout

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Layout className="Layout">
      <Content className="Main">
        <Home />
        <Menu />
        <Projects />
        <ContactForm />
      </Content>
      <Footer>
        © {new Date().getFullYear()} - Giacomo Pasin
      </Footer>
    </Layout>
  </div>
)

export default IndexPage
