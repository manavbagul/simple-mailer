"use strict";
const nodemailer = require("nodemailer");
require("dotenv").config();
const transporter = nodemailer.createTransport(
    {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            ...process.env
        }
    }
);

async function mailer(mail){
    const info = await transporter.sendMail({
        ...mail
    });
    return `Mailer delivered the mail at  ${info.accepted}`
};

// mailer().catch(console.error);

module.exports = mailer;