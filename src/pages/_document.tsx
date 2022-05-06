import Document, { Head, Html, Main, NextScript } from "next/document"
import { Header } from "../Components/Header"



export default  class Mydocument extends Document{
  
  render(){
    return(
      <Html >
        <Head>

        
        </Head>
        <body>
        
          <Main/>
          
        </body>
        <NextScript/>
      </Html>
    )
  }
}