import Head from 'next/head'
import { Footer } from '../Components/Footer'
import { Header } from '../Components/Header'
import { Main } from '../Components/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Belilo</title>
      </Head>
      <Header/>
      <Main/>
      <Footer/>
    </>
      
      
  )
}
