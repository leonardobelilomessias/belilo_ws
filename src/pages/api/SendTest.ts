import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer'
import handlebars, { template } from "handlebars";
import fs from 'fs'
import { resolve } from "path";
import { contentEmail } from "./templates/email/sendSimulation";

export default (request:NextApiRequest,response:NextApiResponse)=>{
    const {service,email}= request.body
    const [{type},{details}] = service
    const variables = {name:'Fulado', type, pages:details.pages,updates:details.updates}

  nodemailer.createTestAccount((err, account) => {
    if (err) {
        console.error('Failed to create a testing account. ' + err.message);
        return process.exit(1);
    } 

    console.log('Credentials obtained, sending message...');

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
            user: account.user,
            pass: account.pass
        }
    });
        const templeteParse = handlebars.compile(contentEmail)
        const templeHtml = templeteParse(variables)
    // Message object
    let message = {
        from: 'contato@belilo.com',
        to: email,
        subject: 'Teste nodemailer',
        html: templeHtml
    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message);
            return process.exit(1);
        }

        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});
  return response.json([])
}

