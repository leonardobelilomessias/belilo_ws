import {AppProps} from 'next/app'
import Head from 'next/head'
import { useCallback, useState } from 'react'
import { Footer } from '../Components/Footer'
import { FullMenu } from '../Components/FullMenu'
import { Header } from '../Components/Header'
import '../styles/globals.scss'
function MyApp({ Component, pageProps }:AppProps) {
  const [menux,setMenux]= useState(false)
  function handleMenux(){
    setMenux(!menux)

  }
  return (
    <>
    {menux?<FullMenu menux={menux} handleMenux={handleMenux}></FullMenu>:<>
    <Header menux ={menux} handleMenux={handleMenux}></Header>
    <Component {...pageProps} /></>
    }
    
    <Footer/>
  </>
  )
}

export default MyApp
