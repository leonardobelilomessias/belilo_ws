import React from 'react'
import style from './schedule.style.module.scss'

const schedule= [
  {number:1,title:"Envie sua ideia", description:"Você nos envia os detalhes da sua ideia ou negocio"},
  {number:2,title:"Modelagem e feedback", description:"Você nos envia os detalhes da sua ideia ou negocio"},
  {number:3,title:"Implementação", description:"Você nos envia os detalhes da sua ideia ou negocio"}
]
function Schedule() {
  return (
    <div className={style.container}>
      <h1>Tudo feito em três simples passos <br/> sem complicação.</h1>
      <div className={style.box}>
        {schedule.map(step=>(
          <>
            <div key={step.number} className={style.content}>
              <h2>{step.number}</h2>
              <h3>{step.title} </h3>
              <p>{step.description}</p>
            </div>
          </>
        ))}

          </div>

    
    </div>
  )
}

export default Schedule