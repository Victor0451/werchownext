
import nodemailer from "nodemailer";

const username = "victor.m.longo@gmail.com";
const password = "victor33749769";

export const transporter = nodemailer.createTransport({
  pool: true,
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use TLS
  auth: {
    user: username,
    pass: password,
  },
});