import React, { useCallback, useState } from 'react'
import style from './style.module.scss'
import StepsSimulation from './StepsSimulation';
import FormSimulator from './FormSimulator';
import ProductsSimulator from './ProductsSimulator';
import SendSimulator from './SendSimulator';

function MySimulator() {
  return (
    <>
      <StepsSimulation 
            stepsTitles={['Tipo Projeto','Detalhes do projeto','Gerar simulação']} 
            stepsDescriptions={[
            'Escolha o tipo de projeto', 
            'Adicione as caracteristicas do projeto',
            'Receba as informaçoes do seu projeto'
          ]}
      />
    </>
  )
}

export default MySimulator