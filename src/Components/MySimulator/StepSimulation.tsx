import React from 'react'
import { Steps } from 'antd';
const { Step } = Steps;
import "antd/dist/antd.css";
function StepSimulation() {

  return (
    <Steps current={0}>
    <Step title="Escolha seu Produto" description="Qual tipo de site você gostaria de Criar?" />
    <Step title="Escolha os dethales"  description="Escolha as caracteristicas que deseja no seu site..." />
    <Step title="Finalizar Simulação" description="Receba sua simulação" />
   </Steps>
  )
}

export default StepSimulation