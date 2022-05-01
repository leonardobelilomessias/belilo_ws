import React from 'react'
import style from './datainfo.style.module.scss'

function DataInfo() {
  return (
    <>
    <div className={style.container}>
      <h2>Bons motivos para você estar no digital:</h2>
      <div className={style.box}>
        <h1> 87,3%</h1>
        <p>De aumento de  novos usarios pela internet</p>
      </div>
      <div className={style.box}>
        <h1>R$ 304 bilhões </h1>
        <p> Em faturamento  do E-commerce no Brasil em 2021</p>
      </div>

      <div className={style.box}>
      <h1 > 97% </h1>
      <p>Dos idosos acessam a internet, aponta pesquisa da CNDL/SPC Brasil</p>

      </div>
    </div>
    
    </>
  )
}

export default DataInfo