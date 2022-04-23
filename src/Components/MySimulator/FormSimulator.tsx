import React, { useCallback, useState } from 'react'

function FormSimulator({setCurrent}) {
  const [nextStep,setNextStep] = useState(0)
  const handleNextStep = useCallback((event,setCurrent)=>{
    event.preventDefault()
    setCurrent(2)
    setNextStep(3)
    console.log(nextStep)
  },[])
  return (
    <>
    {nextStep===0 ? 
        <form>
        {nextStep}
      <input type="text" id="lname" name="lname"/>
      <button onClick={(event)=>{handleNextStep(event,setCurrent)}}>Proximo</button>
      </form>:
      <>
      <h2>Enviar</h2>
      <button>Enviar</button>
      </>
      
    }

    
    </>
  )
}

export default FormSimulator