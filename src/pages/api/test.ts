import { NextApiRequest, NextApiResponse } from "next";

export default async (request:NextApiRequest,response:NextApiResponse)=>{
  
  const {service,email}= request.body
  const [{type},{details}] = service
  console.log(type,details,email)
  return response.json({})

}

// C:\Users\Leonardo Belilo\Desktop\dev\projetos\front\next\belilo\src\templates\email\sendSimulation.hbs