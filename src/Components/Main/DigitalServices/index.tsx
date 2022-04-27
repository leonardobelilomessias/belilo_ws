import React from 'react'
import style from './digitalServices.style.module.scss'
function DigitalServices() {
  return (
   <>
           <section className={style.digitalServices}>
          <div className={style.imageDigitalService}>
          </div>
          <div className={style.textDigitalService}>
            <div >
                <h1>Tire sua ideia do papel e coloque no digital.</h1>
            </div>
            <div>
                <ul>
                  <li>Site institucional</li>
                  <li>Ecommerce</li>
                  <li>LeadingPage</li>
                  <li>Aplicativo mobile</li>
                  <li>Sistema interno</li>
                </ul>
            </div>
          </div>
        </section>
   </>
  )
}

export default DigitalServices