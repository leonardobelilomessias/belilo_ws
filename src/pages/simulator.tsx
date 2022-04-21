import Head from 'next/head'
import React from 'react'
import MySimulator from '../Components/MySimulator'

function Simulator() {
  return (
    <>
    <Head>
      <title>Simulator</title>
    </Head>
    <div>
      <h1>Simulador</h1>  
      <MySimulator/>
    </div>
    </>
  )
}

export default Simulator