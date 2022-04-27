import React from 'react'
import style from './cases.style.module.scss'
function Cases() {
  return (
    <>
    
    <section className={style.examples}>
          <h1>Casos de Sucesso</h1>
          <div className={style.models}>
            <div className={style.model}><p>Natcults</p></div>
            <div className={style.model}><p>Puzzle Piece</p></div>
            <div className={style.model}><p>Amazon Delivery</p></div>
          </div>
          <div className={style.models}>
            <div className={style.model}><p>HubStack</p></div>
            <div className={style.model}><p>Legacy Conect</p></div>
            <div className={style.model}><p>GoLana</p></div>
          </div>
        </section></>
  )
}

export default Cases