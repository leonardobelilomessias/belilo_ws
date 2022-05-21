import Document, { Head, Html, Main, NextScript } from "next/document"
import { Header } from "../Components/Header"



export default  class Mydocument extends Document{
  
  render(){
    return(
      <Html >
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300&display=swap" rel="stylesheet"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"  />
        
        </Head>
        <body>
        
          <Main/>
          
        </body>
        <NextScript/>
      </Html>
    )
  }
}