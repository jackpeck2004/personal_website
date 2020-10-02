// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import { NowRequest, NowResponse } from "@vercel/node"
import nodemailer from "nodemailer"

type Email = {
  from: string
  to: string
  subject: string
  text: string
}

type RequestMessage = {
  name: string
  email: string
  content: string
}

export default (request: NowRequest, response: NowResponse) => {
  console.log("create Transporter")
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jackpeckcontact@gmail.com",
      pass: "Lego2004",
    },
  })

  const requestMessage: RequestMessage = request.body.email

  const msg: Email = {
    from: requestMessage.email,
    to: "giacomo.pasin@gmail.com",
    subject: `Contact - ${requestMessage.name}`,
    text: requestMessage.content,
  }

  console.log("send mail")
  transporter.sendMail(msg, (err: any, info: any) => {
    console.log("email")
    if (err) console.log(err)
    else {
      console.log("done\n", info)
    }
  })

  console.log(requestMessage)
  response.send("hello")
}
