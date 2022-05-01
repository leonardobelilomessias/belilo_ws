import React from 'react'
import style from './cases.style.module.scss'
import Natcults from '../../../../public/natcults.png'
import Target from '../../../../public/target.png'
import FastFree from '../../../../public/fastfreee.png'

import Image from 'next/image'
function Cases() {
  return (
    <>
    
    <section className={style.examples}>
          <h1>Casos de Sucesso</h1>
          <div className={style.models}>

            <div className={style.model}>
              <div className={style.background}></div>
              <div className={style.imgBackground}><Image alt="" width={300} height={300} src={Natcults} /> </div>

            </div>

            <div className={style.model}>
              <div className={style.background}></div>
              <div className={style.imgBackground} ><Image  alt="" width={300} height={300} src={Target} /> </div>
            </div>
            <div className={style.model}>
              <div className={style.background}></div>
              <div className={style.imgBackground} >  <Image alt="" width={300} height={300} src={FastFree} /> </div>
             

            </div>
          </div>
          <div className={style.models}>

<div className={style.model}>
  <div className={style.background}></div>
  <div className={style.imgBackground}><Image alt="" width={300} height={300}src={Natcults} /> </div>

</div>

<div className={style.model}>
  <div className={style.background}></div>
  <div className={style.imgBackground} ><Image  alt="" width={300} height={300} src={Target} /> </div>
</div>
<div className={style.model}>
  <div className={style.background}></div>
  <div className={style.imgBackground} >  <Image  alt="" width={300} height={300} src={FastFree} /> </div>
 

</div>
</div>
        </section></>
  )
}

export default Cases