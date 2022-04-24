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

      <MySimulator/>
    </div>
    </>
  )
}

export default Simulator