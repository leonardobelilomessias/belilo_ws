import React, { useState } from 'react'
import ContentSimulator from './ContentSimulator'
import FinalySimulator from './FinalySimulator'
import FormSimulator from './FormSimulator'
import ProductsSimulator from './ProductsSimulator'
import SendSimulator from './SendSimulator'
import Step from './Step'
import style from './stepSimulator.styles.module.scss'
function StepsSimulation({stepsTitles,stepsDescriptions,content}) {
  const [service,setService] = useState([])
  const [currentStep,setCurrentStep]=useState(0)
  return (
    <div className={style.containerSimulator}>
    <h1>Simulador</h1>  
    <div className={style.steps}>
      {stepsTitles.map((step,index)=>(
            <Step  key={step} title={step} 
            current={currentStep}  
            description={stepsDescriptions[index]} 
            step={index}
            />
      ))}

    </div>


    {currentStep=== 0 &&    <ProductsSimulator current={currentStep} service={service} setService={setService} setCurrent={setCurrentStep}/>}
    {currentStep === 1 && <FormSimulator style={style.formSimulator} service={service} setService={setService} setCurrent={setCurrentStep}/>}
    {currentStep === 2 && <SendSimulator style={style.finalySimulator} service={service} setService={setService} setCurrent={setCurrentStep}/>}
    {currentStep === 3 && <FinalySimulator style={style.finalySimulator} service={service} setService={setService} setCurrent={setCurrentStep}/>}


    </div>
  )
}

export default StepsSimulation