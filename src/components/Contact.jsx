import React from 'react'
import { Form, Input, Button } from 'antd'
import '../styles/Contact.scss'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
}

const ContactForm = () => {
  const onFinish = values => {
    // fetch('https://getform.io/f/b1b1b9db-44d5-4727-9557-5d870d5bc512', {
    //   method: 'POST',
    //   body: values
    // });
    //TODO: send email with form content
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

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
              message: 'Please input your name!',
              type: 'string',
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
              message: 'Please input your email!',
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name={['user', 'introduction']} label="Introduction">
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
  )
}

export default ContactForm
