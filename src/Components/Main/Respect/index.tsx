import Image from 'next/image'
import React from 'react'
import style from './respect.styles.module.scss'
import Brands from '../../../../public/brand.jpg'
function Respect() {
  return (
    <div className={style.container}>
    <div className={style.image}> <Image alt='brands'src={Brands}  layout='fill' objectFit='cover'/></div>
      <div className={style.content}>
        <h1>Toda empresa seria tem um site ou app de respeito</h1>
    </div>
    </div>
  )
}

export default Respect