import React, { useCallback, useState } from 'react'
import FormSimulator from './FormSimulator'
import style from './style.module.scss'

function ProductsSimulator({current,setCurrent,setService,service}) {
  const services = ['Site Estatico ou intitucional','Blog','Ecommerce','Leadpage','Aplicativo mobile','Sistemas Empresariais']

  const handleChoiceService= useCallback(async(serviceChosen,setCurrent)=>{
    const addService = {type:serviceChosen}
    setService([...service,addService])
    setCurrent(1)
  },[])
 
  
  return (
    <div className={style.container}>


    {services.map((serviceChosen,index)=>(
          <div key={index} className={style.item} onClick={()=>{handleChoiceService(serviceChosen,setCurrent)}}>
            <h2>{serviceChosen}</h2>
            <button>Escolher</button>
          </div>
    ))}
    </div>
  )
}

export default ProductsSimulator