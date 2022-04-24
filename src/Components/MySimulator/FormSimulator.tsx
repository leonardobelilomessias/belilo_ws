import React, { useCallback, useEffect, useState } from 'react'
import SendSimulator from './SendSimulator'

function FormSimulator({setCurrent,style,setService,service}) {
  const [nextStep,setNextStep] = useState(0)
  const[pages,setPages]=useState('')
  const[sections,setSections]=useState('')
  const[updates,setUpdates]=useState('')
  const handleNextStep = useCallback((event,setCurrent,arr)=>{
    event.preventDefault()
    setCurrent(2)
    const details = {pages:arr[0],sections:arr[1],updates:arr[2]}
    setService([...service,{details:details}])
  },[])
  useEffect(()=>{
    console.log(pages)
  },[pages])
  return (
    <>
    {nextStep===0 ? 
      <form className={style}>

        <label><p>Paginas</p></label>
        <input type="text" onChange={(e)=>{setPages(e.target.value)}} name="pages"/>
        
        <label ><p>Secçoes</p></label>
        <input type="text"  onChange={(e)=>{setSections(e.target.value)}} name="sections"/>
        <label ><p>Atualizaçoes</p></label>
        <input type="text"   onChange={(e)=>{setUpdates(e.target.value)}}name="updates"/>
        <button onClick={(event)=>{handleNextStep(event,setCurrent,[pages,sections,updates])}}>Proximo</button>

       
      </form>:
      <>
   
      <button>Enviar</button>
      </>
      
    }

    
    </>
  )
}

export default FormSimulator