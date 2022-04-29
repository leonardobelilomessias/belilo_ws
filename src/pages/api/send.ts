import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer'
import Handlebars from "handlebars";
import { contentEmail } from "./templates/email/sendSimulation";

export default (request:NextApiRequest,response:NextApiResponse)=>{
  const {service,email}= request.body
  const [{type},{details}] = service
  const variables = {name:'Fulado', type, pages:details.pages,updates:details.updates}

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({ 
      service: 'gmail', 
      auth: { 
         user: 'leonardobelilo.dev@gmail.com', 
         pass: 'leo175033' 
       } 
      });
    // Message object
    const templateEmail = Handlebars.compile(contentEmail)
    const templateHtml = templateEmail(variables)
    let message = {
        from: 'Desenvolvimento Belilo <leonardobelilo.dev@gmail.com>',
        to: email,
        subject: 'Email teste nodemailer',
        html: templateHtml
    };

    transporter.sendMail(message, (err, info) => {
      if(err)
        console.log(err)
      else
        console.log(info);
   });
  return response.json({message:'all ok'})
}

