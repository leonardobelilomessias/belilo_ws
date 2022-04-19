import Head from 'next/head'
import { useCallback, useState } from 'react'
import { Main } from '../Components/Main'
import { FullMenu } from '../Components/FullMenu'

export default function Home() {
  const [menux,setMenux]= useState(false)
  const handleMenux = ()=>{setMenux(!menux)}
  return (
    <>
      
      <Head >
        <title>Belilo</title>
      </Head>
      
     {
        menux?<FullMenu menux={menux} handleMenux={handleMenux}></FullMenu>:
          <>
            <Main/>
            
          </>
      }

    </>  
  )
}
