import React from 'react'
// import { Link } from "gatsby"
// import Image from "../components/image"
// import Layout from "../components/layout"
import '../styles/App.scss'
import Home from '../components/Home'
import Projects from '../components/Projects'
import Menu from '../components/Menu'
import ContactForm from '../components/Contact'
import Layout from '../components/Layout'

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
