import { NowRequest, NowResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import * as config from './config.json';

const mailConfig =
  process.env.ENV === 'DEV'
    ? {
        user: config.MailAddr,
        pass: config.MailPass,
      }
    : {
        user: process.env.mailAddr,
        pass: config.env.mailPass,
      };

type Email = {
  from: string;
  to: string;
  subject: string;
  text: string;
};

type RequestMessage = {
  name: string;
  email: string;
  content: string;
};

export default (request: NowRequest, response: NowResponse) => {
  console.log('create Transporter');
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: mailConfig.user,
      pass: mailConfig.pass,
    },
  });

  const requestMessage: RequestMessage = request.body.email;

  const msg: Email = {
    from: requestMessage.email,
    to: 'giacomo.pasin@gmail.com',
    subject: `Contact - ${requestMessage.name} ${requestMessage.email}`,
    text: requestMessage.content,
  };

  console.log('send mail');

  transporter.sendMail(msg, (err: any, info: any) => {
    if (err) response.status(409).send(err);
    else {
      response.status(200).send(info);
    }
  });
};
