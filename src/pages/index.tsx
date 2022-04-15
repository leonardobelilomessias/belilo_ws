import Head from 'next/head'
import { useState } from 'react'
import { Footer } from '../Components/Footer'
import { Header } from '../Components/Header'
import { Main } from '../Components/Main'
import { FullMenu } from '../Components/FullMenu'
import style from './styles.module.scss'

export default function Home() {
  const [menux,setMenux]=useState<boolean>(false)
  function handleMenux(){
    setMenux(!menux) 
  }
  return (
    <>
      
      <Head >
        <title>Belilo</title>
      </Head>
      
     {
        menux?<FullMenu menux={menux} handleMenux={handleMenux}></FullMenu>:
          <>
            <Main/>
            <Footer/>
          </>
      }

    </>  
  )
}
