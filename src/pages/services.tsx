import Head from 'next/head'
import React from 'react'
import style from '../styles/services.style.module.scss'
import Image from 'next/image'
import Lead from '../../public/lead.jpg'

function Services() {
  return (
    <>
    <Head>
      <title>Serviços</title>
    </Head>

    <div>   

        <h1>Serviços</h1>
 
        <div className={style.itemSection}>
          <div className={style.imageSection} >
            <Image alt='image' src={Lead} width={600} height={300}/>
          </div>
          <div className={style.infoSection}>
            <h1>Site Estatico ou institucional </h1>
          </div> 
        </div>

        <div className={style.itemSection}>
          <div className='hereimage' >
            <Image alt='image' src={Lead} width={600} height={300}/>
          </div>

          <div className={style.infoSection}>
            <h1>Blogs e paginas pessoais </h1>
          </div>
        </div>

        <div className={style.itemSection}>
          <div className='hereimage' >
            <Image alt='image' src={Lead} width={600} height={300}/>
          </div>
          <div className={style.infoSection}>
            <h1>Ecommerce </h1>
          </div>
        </div>

        <div className={style.itemSection}>
          <div className='hereimage' >
            <Image alt='image' src={Lead} width={600} height={300}/>
          </div>

          <div className={style.infoSection}>
            <h1>Leadpages</h1>
          </div>
        </div>

        <div className={style.itemSection}>
          <div className='hereimage' >
            <Image alt='image' src={Lead} width={600} height={300}/>
          </div>

          <div className={style.infoSection}>
          <h1>Aplicativos Mobile </h1>
          </div>
        </div>

        <div className={style.itemSection}>
          <div className='hereimage' >
            <Image alt='image' src={Lead} width={600} height={300}/>
          </div>

          <div className={style.infoSection}>
            <h1>Sistemas empresariais </h1>
          </div>
        </div>

    </div> 
    </>

  )
}

export default Services