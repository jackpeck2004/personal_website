import React from "react"
import ContactForm from "../components/Contact"
import Home from "../components/Home"
import Layout from "../components/Layout"
import Menu from "../components/Menu"
import Projects from "../components/Projects"
// import { Link } from "gatsby"
// import Image from "../components/image"
// import Layout from "../components/layout"
import "../styles/App.scss"

const IndexPage = () => (
  <div>
    <Layout title="Home">
      <Home />
      <Menu />
      <Projects />
      <ContactForm />
    </Layout>
  </div>
)

export default IndexPage
