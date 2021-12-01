
import nodemailer from "nodemailer";

const username = "werchowsgi@gmail.com";
const password = "Lavalle123$";

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