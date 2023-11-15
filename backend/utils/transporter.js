import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
let transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  requireTLS: true,
  encoding: "STARTTLS",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});
export default transporter;
