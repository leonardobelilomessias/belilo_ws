import React, { useCallback, useState } from 'react'
import FormSimulator from './FormSimulator'
import style from './style.module.scss'

function ProductsSimulator({current,setCurrent}) {
  const services = ['Site Estatico ou intitucional','Blog','Ecommerce','Leadpage','Aplicativo mobile','Sistemas Empresariais']
  const [choice,setChoice] = useState(false)
  const handleChoiceService= useCallback(async(service,setCurrent)=>{
    setCurrent(1)
    setChoice(true)
  },[])
  return (
    <div className={style.container}>


    {!choice && services.map((service,index)=>(
          <div key={index} className={style.item} onClick={()=>{handleChoiceService(service,setCurrent)}}>
            <h2>{service}</h2>
            <button>Escolher</button>
          </div>
    ))}
    {choice && <> 
      <FormSimulator setCurrent={setCurrent}/>
    <button onClick={()=>{
      setChoice(!choice)
      setCurrent(0)
      }}>voltar</button>
    </>}
    </div>
  )
}

export default ProductsSimulator