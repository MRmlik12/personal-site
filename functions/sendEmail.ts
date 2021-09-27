import {Handler} from '@netlify/functions';
import {createTransport} from 'nodemailer';

export const handler: Handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      message: 'Method not allowed',
    };
  }

  const reqContent = JSON.parse(event.body!);

  const transporter = createTransport({
    host: process.env.SERVICE,
    port: 587,
    secure: true,
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASS,
    },
  });

  const mail = {
    from: process.env.SENDER_EMAIL,
    to: process.env.SEND_TO_EMAIL,
    subject: reqContent.title,
    text: `from: ${reqContent.senderEmail}\n content: ${reqContent.title}`,
  };

  transporter.sendMail(mail, (err, info) => {
    if (err) {
      console.log(err);
      return {
        statusCode: 200,
        message: JSON.stringify({message: 'Couldn\'t send email'}),
      };
    }

    console.log(info);
  });

  return {
    statusCode: 200,
    message: JSON.stringify({message: 'Hello World'}),
  };
};
