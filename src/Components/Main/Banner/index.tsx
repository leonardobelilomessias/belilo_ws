import Image from 'next/image'
import React from 'react'
import Men from '../../../../public/men.jpg'
import style from './banner.styles.module.scss'

function Banner() {
  return (
    <div className={style.container}>


    <div className={style.background}> 
      <Image alt='men' src={Men} layout='fill' objectFit='cover' />
      </div>
      <div className={style.text}>
      <h1>Não importa qual o tipo  do seu negocio, nos temos uma solução tecnologica para você</h1>
      </div>
    </div>
  )
}

export default Banner