import React from 'react'
import style from './digitalServices.style.module.scss'
function DigitalServices() {
  return (
   <>
          <section className={style.container}>
          <div className={style.box}>
            <div >
                <h1>Qual é o seu objetivo? -Dor prazer</h1>
            </div>

            <div className={style.content}> 
                <div className={style.card}>
                  <h3 className={style.titleCard}>Identidade Digital ou brand</h3>
                  <div className={style.imageCard}/>
                  <div>
                    <div>Site institucional ou pagina estatica</div>
                    <div>Blog</div>
                  </div>

                  <div className={style.infoCard}>
                    <p>Alcance mais pessoas e deixe sua marca, negocio ou portifolio disponivel<br/>
                     para todas as pessoas</p>
                     <ul>
                       <li>
                         Site leve e responsivo.
                       </li>
                       <li>
                         Divulgue sua empresa ou portifolio
                       </li>
                       <li>Compartilhe suas ideias e experieias</li>
                     </ul>
                  </div>

                  <div className={style.footerCard}></div>
                </div>

                <div className={style.card}>
                  <h3>Comercial</h3>
                  <div>Ecommerce</div>
                  <div>LeadingPage</div>
                </div>

                <div className={style.card}>
                  <h4>Empresarial</h4>
                  <div>Apdivcativo mobile</div>
                  <div>Sistema interno</div>
                  </div>
                </div>


          </div>
        </section>
   </>
  )
}

export default DigitalServices