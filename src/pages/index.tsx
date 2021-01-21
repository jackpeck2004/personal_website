//import { MenuOutlined } from '@ant-design/icons';
import React from "react";
//import Media from 'react-media';
//import ContactForm from '../components/Contact';
import Home from '../components/Home';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import ContactFormSection from '../components/ContactForm';
//import Sidebar, { openSidebar, sidebarState } from '../components/Sidebar';
import '../styles/App.scss';
import Menu from '../components/Menu';

const IndexPage: React.FC = () => {
  return (
    <div>
      <Layout title="Home">
        <Home />
        <Menu />
        <Projects />
        <ContactFormSection />
      </Layout>
    </div>
  );
};

export default IndexPage;
