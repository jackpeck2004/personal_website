import { NowRequest, NowResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import * as config from './config.json';

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
      user: config.MailAddr,
      pass: config.MailPass,
    },
  });

  const requestMessage: RequestMessage = request.body.email;

  const msg: Email = {
    from: requestMessage.email,
    to: 'giacomo.pasin@gmail.com',
    subject: `Contact - ${requestMessage.name}`,
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
