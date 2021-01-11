//import { MenuOutlined } from '@ant-design/icons';
import React from "react";
//import Media from 'react-media';
//import ContactForm from '../components/Contact';
import Home from "../components/Home";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
//import Sidebar, { openSidebar, sidebarState } from '../components/Sidebar';
import "../styles/App.scss";
import Airform from "react-airform";
import "../styles/AirForm.scss";
import { Button } from "antd";

const ContactFormNew: React.FC = () => {
  return (
    <Airform className="airform" email="giacomo.pasin@gmail.com">
      <div className="formItem">
        <label for="name">Name:</label>
        <input placeholder="John Doe" type="text" name="name" />
      </div>
      <div className="formItem">
        <label for="email">Email:</label>
        <input placeholder="youremail@example.com" type="email" name="email" />
      </div>
      <div className="formItem">
        <label for="message">Message:</label>
        <textarea
          placeholder="The body of your message..."
          name="message"
        ></textarea>
      </div>
      <Button className="submitForm" type="primary" htmlType="submit">
        Submit
      </Button>
    </Airform>
  );
};

const ContactFormSection: React.FC = () => {
  return (
    <div className="contactFormSection">
      <h2>Contact Me</h2>
      <ContactFormNew />
    </div>
  );
};

const IndexPage: React.FC = () => {
  return (
    <div>
      <Layout title="Home">
        <Home />
        <Projects />
        <ContactFormSection />
      </Layout>
    </div>
  );
};

export default IndexPage;
