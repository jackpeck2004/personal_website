// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import sgMail from "@sendgrid/mail"
import { NowRequest, NowResponse } from "@vercel/node"

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default (request: NowRequest, response: NowResponse) => {
  // const msg = {
  //   to: "giacomo.pasin@gmail.com",
  //   from: "giacomopasincontact@gmail.com",
  //   subject: "Sending with Twilio SendGrid is Fun",
  //   text: "and easy to do anywhere, even with Node.js",
  //   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  // }
  // sgMail.send(msg)
  console.log(request.body.email)
  response.send("hello")
}
