import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const mailTransporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD
  }
});

const sendMail = (emailAddress, subject, messageTemplate) => mailTransporter.sendMail({
  from: 'Your friends at worklist <worklist.mailer@gmail.com>',
  to: emailAddress,
  subject,
  html: messageTemplate
});

export default sendMail;
