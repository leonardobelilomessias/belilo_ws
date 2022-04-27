import Link from 'next/link'
import React from 'react'
import style from './firstSection.style.module.scss'
function FirstSection() {
  return (
   <>
         <div className={style.firstSection}>  
        <div className={style.headLine}>
          <div className={style.textHeadline}>
            <h4>Deixe sua impressão no digital!</h4>
            <h1>Desenvolvimento<br/> de Sites <br/>e Aplicativos</h1>
            <h3>Somos especialistas em tecnologia e damos poderes as suas ideia no mundo digital.</h3>
            <Link href="/simulator" >
              <a className={style.buttonHeadline} >
               Simular meu projeto
              </a>
            </Link>
          </div>
        </div>
        <div className={style.imageHeadline}>
          <div>
          </div>
        </div>
      </div>
   </>
  )
}

export default FirstSection