import { Button, Form, Input } from 'antd'
import React from 'react'
import '../styles/Contact.scss'
import axios from "axios"
// import { Store } from 'antd/lib/form/interface'

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
  const onFinish = (values: any) => {
    // const msg: any = {
    //   email: {
    //     ...values
    //   }
    // }

    let location:string = window.location.href;
    if(location.endsWith('/')) location = location.slice(0,-1);
    const url:string = location + '/api/email'

    axios.post("/api/email", {
      email: {
        ...values
      }
    })
    


  }

  const onFinishFailed = (errorInfo: any) => {
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

        <Form.Item name='content' label="Message">
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
