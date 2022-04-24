import React, { useState } from 'react'

function SendSimulator({setCurrent,style,setService,service}) {
  const[email,setEmail] = useState('')
  function handleSendSimulation(){
    setService([...service,{email:email}])
    setCurrent(3)


  }
  return (
    <div className={style}>
      <h1>Finalizar Orçamento</h1>
      <p>Vamos lhe enviar um email com seu orçamento para isso coloque o seu email no campo solicitado</p>
      <input type="text" onChange={(e)=>setEmail(e.target.value)} />
      <button onClick={handleSendSimulation}>Enviar</button>
    </div>
  )
}

export default SendSimulator