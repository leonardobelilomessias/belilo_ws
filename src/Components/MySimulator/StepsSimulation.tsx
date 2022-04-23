import React, { useState } from 'react'
import ContentSimulator from './ContentSimulator'
import ProductsSimulator from './ProductsSimulator'
import Step from './Step'
import style from './stepSimulator.styles.module.scss'
function StepsSimulation({stepsTitles,stepsDescriptions,content}) {
  const [currentStep,setCurrentStep]=useState(0)

  return (
    <div >
    <div className={style.steps}>
      {stepsTitles.map((step,index)=>(
            <Step  key={step} title={step} 
            current={currentStep}  
            description={stepsDescriptions[index]} 
            step={index}
            />
      ))}

    </div>
    <ProductsSimulator current={currentStep} setCurrent={setCurrentStep}/>
    </div>
  )
}

export default StepsSimulation