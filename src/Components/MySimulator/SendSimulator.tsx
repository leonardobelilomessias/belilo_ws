import React, { useState } from 'react'
import api  from '../../services/api'

function SendSimulator({setCurrent,style,setService,service}) {
  const[email,setEmail] = useState('')

  async function handleSendSimulation(){
    setService([...service,{email:email}])
    setCurrent(3)
    const response = await api.post('/SendTest',{service,email:email})
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