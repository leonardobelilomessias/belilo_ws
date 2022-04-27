import React from 'react'
import {MdTaskAlt} from 'react-icons/md'
import style from './listServices.style.module.scss'
function ListServices() {
  return (
  <>
          <section className={style.listServices}>
          <h1>Mais sobre nossos serviços</h1>
          <div className={style.service}>
            <div className={style.itemService}>
                <MdTaskAlt size={40}/>
              <h2>Desenvolvimento</h2>
              <p>Pesquisamos, elaboramos e criamos o produto com as melhores tenologias do mercado</p>
            </div>
            <div className={style.itemService}>
              <MdTaskAlt size={40}/>
              <h2>Seo</h2>
              <p>Apareça em primeiro lugar no Google. Trabalhamos com otimização de SEO(Search Engine Optimization)</p>
            </div>
            <div className={style.itemService}>
                <MdTaskAlt size={40}/>
              <h2>Desing</h2>
              <p>Criação de Layout Baseado em UI/UX. Garantido a melhor experiência do usuario.</p>
            </div>
          </div>

          <div className={style.service}>
            <div className={style.itemService}>
                <MdTaskAlt size={40}/>
              <h2>Responsividade</h2>
              <p>Suas paginas e sites em qualquer tela de dispositivo. Para que seu produto estaja disponivel em todas plataformas</p>
            </div>
            <div className={style.itemService}>
                <MdTaskAlt size={40}/>
              <h2>Dashboard</h2>
              <p>Dashboard personalizada para facilitação da organização de dados e informaçoes do software, site, sistema ou app.</p>
            </div>
            <div className={style.itemService}>
              <MdTaskAlt size={40}/>
              <h2>Integração</h2>
              <p>Conectamos nossos serviços e produtos com serviços externos como facebook,Google, Instagram, Mercado Livre Etc. </p>
            </div>
          </div>
        </section>
  </>
  )
}

export default ListServices