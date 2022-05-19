import React from 'react'
import style from './digitalServices.style.module.scss'
import Image from 'next/image'
import Business from '../../../../public/business.png'
import Express from '../../../../public/express.png'
import Premium from '../../../../public/Premium.png'
function DigitalServices() {
  return (
   <>
          <section className={style.container}>
              <div className={style.titleContainer}>
                 <h1>Qual seu perfil?</h1>
        </div>
        <div className={style.boxContainer}>
            <div className={style.content}>
            <h2>Express</h2>
            <Image alt='' src={Express} layout='fixed' width={ 70} height={70} />
                <p>Site Completamente pronto em 72 horas.</p>
                <ul>
                  <li>Dominio Gratis ex: nomedoseusite.com</li>
                  <li>Email profissinal Ex.:seunome@seusite.com </li>
                  <li>Compativel com todas as telas</li>
                  <li>certificado ssl contra invasores</li>
                  <li>Paginas rapidas</li>

                </ul>
                  <p>apartir de </p>
            <h3>R$597,90</h3>
          <button> Saiba mais</button>
        </div>
        
        <div className={style.content}>
            <h2>Business</h2>
            <Image alt='' src={Business} layout='fixed' width={ 70} height={70} />
                <p>Configuração completa para receber pagamentos</p>
                <ul>
                  <li>Dominio Gratis ex: nomedoseusite.com</li>
                  <li>Email profissinal Ex.:seunome@seusite.com </li>
                  <li>Compativel com todas as telas</li>
                  <li>certificado ssl contra invasores</li>
                  <li>Checkout de pagamento</li>
                </ul>
                  <p>apartir de </p>
                  <h3>R$697,90</h3>
          <button> Saiba mais</button>
        </div>
        
        <div className={style.content}>
            <h2>Premium</h2>
            <Image alt='' src={Premium}  layout='fixed' width={ 70} height={70} />
                <p>Peformace e gerenciamento de negocios.</p>
                <ul>
                  <li>Dashboards estilizadas e personalizadas.</li>
                  <li>Conexão com serviços externos.</li>
              <li>Gestão e gerenciamento de equipe e produtos.</li>
              <li>Aplicativos mobile nas principais lojas de apps.</li>
              <li>Informaçoes em tempo real.</li>
                </ul>
                  <p>apartir de </p>
                  <h3>R$1987,90</h3>
          <button> Saiba mais</button>
        </div>
        </div>
        </section>
   </>
  )
}

export default DigitalServices