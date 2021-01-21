import { Button, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import "../styles/Contact.scss";
// import { Store } from 'antd/lib/form/interface'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const ContactForm = () => {
  const onFinish = (values: any) => {
    axios.post("/api/email", {
      email: {
        ...values,
      },
    });

    location.reload();
  };

  const onFinishFailed = (errorInfo: any) => {
    alert("Error, failed to send message");
    console.log(errorInfo);
  };

  return (
    // <section className="contact">
    <div className="ContactForm">
      <h3>Contact Me!</h3>
      <Form
        className="Form"
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        id="contactForm"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
              type: "string",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="content" label="Message">
          <Input.TextArea />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
    // </section>
  );
};

export default ContactForm;
