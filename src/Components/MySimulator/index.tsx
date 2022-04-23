import React, { useCallback, useState } from 'react'
import style from './style.module.scss'
import StepsSimulation from './StepsSimulation';
import FormSimulator from './FormSimulator';
import ProductsSimulator from './ProductsSimulator';
import SendSimulator from './SendSimulator';



function MySimulator() {


  return (
    <div>
   

      <h1>Escolha o seu tipo de site</h1>
      <StepsSimulation 
      stepsTitles={['Passo1','Passo2','Passo3']} 
      stepsDescriptions={['descrição passo 1', 'descriçao paso2','descrição paso3']}
      content={ProductsSimulator}
      />




    </div>
  )
}

export default MySimulator