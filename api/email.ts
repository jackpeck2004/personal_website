// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import { NowRequest, NowResponse } from "@vercel/node"

export default (request: NowRequest, response: NowResponse) => {
  // const 
  console.log(request.body.email)
  response.send("hello")
}
