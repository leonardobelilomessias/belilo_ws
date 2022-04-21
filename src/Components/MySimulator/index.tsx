import React from 'react'
import style from './style.module.scss'
import { Steps, Button } from 'antd';
import StepSimulation from './StepSimulation';

const services = ['Site Estatico ou intitucional','Blog','Ecommerce','Leadpage','Aplicativo mobile','Sistemas Empresariais']

function MySimulator() {

  return (
    <div>
   

      <div className={style.container}>
      <h1>Escolha o seu tipo de site</h1>


      {services.map((service,index)=>(
            <div key={index} className={style.item}>
              <h2>{service}</h2>
              <Button type='primary'>Teste</Button>
            </div>
      ))}
      </div>

    </div>
  )
}

export default MySimulator