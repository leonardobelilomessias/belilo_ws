import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from './firstSection.style.module.scss'
import Cover from '../../../../public/cover2.jpg'

function FirstSection() {
  return (
   <>
         <div className={style.firstSection}>  
        <div className={style.headLine}>
          <div className={style.textHeadline}>
            <h4>Desenvolvimento de sites e aplicativos</h4>
            <h1>monstre valor <br/>Garanta respeito</h1>
            <h3>Somos especialistas em tecnologia e damos poderes para alavancar suas ideias no mundo digital.</h3>
            <Link href="/simulator" >
              <a className={style.buttonHeadline} >
               Simular meu projeto →
              </a>
            </Link>
          </div>
        </div>
        <div className={style.imageHeadline}>
            <Image alt='woman power' src={Cover} layout='fill' objectFit='cover'/>
        </div>
      </div>
   </>
  )
}

export default FirstSection