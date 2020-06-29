import React from "react"
import ContactForm from "../components/Contact"
import Home from "../components/Home"
import Layout from "../components/Layout"
import Menu from "../components/Menu"
import Projects from "../components/Projects"
import Sidebar from "../components/Sidebar"
// import { Link } from "gatsby"
// import Image from "../components/image"
// import Layout from "../components/layout"
import "../styles/App.scss"
import { getWindowDimensions } from "../utils/windowTools"

const IndexPage = () => {
  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Layout title="Home">
        <Home />
        {windowDimensions.width >= 1000 ? <Menu /> : <Sidebar />}
        <Projects />
        <ContactForm />
      </Layout>
    </div>
  )
}

export default IndexPage
