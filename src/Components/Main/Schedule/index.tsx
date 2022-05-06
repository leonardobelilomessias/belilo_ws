import React from 'react'
import style from './schedule.style.module.scss'

const schedule= [
  {number:1,title:"Envio", description:"Você nos envia os detalhes  de como você gostaria que fosse disponibilidada  sua ideia ou negocio"},
  {number:2,title:"Modelagem", description:"Prototipamos um produto com todos os detalhes enviado para lhe apresentar"},
  {number:3,title:"Implementação", description:"Entrega do projeto finalem uma hospedagem em nuvem, dominio pesonalizado disponivel para toda web ou lojas de aplicativos"}
]
function Schedule() {
  return (
    <>
    <div className={style.container}>
      <h1>Tudo em três simples passos <br/> sem complicação.</h1>
      <div className={style.box}>
        {schedule.map((step,index)=>(

            <div key={index} className={style.content}>
              <h2>{step.number}</h2>
              <h3>{step.title} </h3>
              <p>{step.description}</p>
            </div>

        ))}

          </div>

    
    </div>
    </>
  )
}

export default Schedule