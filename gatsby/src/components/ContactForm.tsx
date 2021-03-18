import React from 'react';
import Airform from 'react-airform';
import '../styles/AirForm.scss';
import { Button } from 'antd';

const ContactFormNew: React.FC = () => {
  return (
    <Airform className="airform" email="giacomo.pasin@gmail.com">
      <div className="formItem">
        <label htmlFor="name">Name:</label>
        <input placeholder="John Doe" type="text" name="name" />
      </div>
      <div className="formItem">
        <label htmlFor="email">Email:</label>
        <input placeholder="youremail@example.com" type="email" name="email" />
      </div>
      <div className="formItem">
        <label htmlFor="message">Message:</label>
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

export default ContactFormSection;
