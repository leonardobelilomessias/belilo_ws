import React from 'react'

function FinalySimulator({setCurrent,style,setService,service}:any) {
  const[{type},{details},{email}]= service
  
  function handleFinalySimulation(){
    setService([])
    setCurrent(0)
  }

  return (
    <div className={style}>
      <h1>Sua simulação foi finalizad com sucesso</h1>
      <p>{type}</p>
      <p>{details.pages}</p>
      <p>{email}</p>

    <button onClick={handleFinalySimulation}>Nova Simulação</button>
  
    </div>
  )
}

export default FinalySimulator