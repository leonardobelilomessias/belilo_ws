import React from 'react'
import style from '../styles/about.style.module.scss' 
import Image from 'next/image'
import Website from '../../public/website.png'

function About() {
  return (
    <>
    <div className={style.firstSection}>
      <h1>Sobre Nós</h1>
      <h2>Tiramos seu plano do papel, colocamos no digital e damos novos poderes ao seu negocio.</h2>
      <h3>Desenvolvemos serviços tecnológicos como sites institucionais, blogs, ecommercer e aplicativos 
        e outros diversos tipos de ferramentas que auxiliam negócios físicos e digitais aumentar a o seu desempenho , 
        margem de lucro e alcançar ainda mais pessoas, através de ferramentas de tecnologia de ponta do mercado.
      </h3>
      <button>Ver Serviços</button>
    </div>

    <div className={style.secondSection}>
      <h1>Nossos serviços</h1>
      <div className={style.listService}>
        <div className={style.service}>
          <span>Sites Estaticos ou Institucionais</span>
          <div><Image alt='web' src={Website} width={200} height={200}></Image></div>
          <p>Demonstre sua presença
            no mundo digital com elegantes e modernos. Ideal para sites pessoais e institucionais.
          </p>
          <button>Ver Mais</button>
        </div>
        <div className={style.service}>
          <span>Capitura de leads ou leadpages</span>
          <div><Image alt='web' src={Website} width={200} height={200}></Image></div>
          <p>
          Demonstre sua presença
          no mundo digital com elegantes e modernos. Ideal para sites pessoais e institucionais.
          </p>
          <button>Ver Mais</button>
        </div>
        <div className={style.service}>
          <span>Sites Estaticos ou Institucionais</span>
          <div><Image alt='web' src={Website} width={200} height={200}></Image></div>
          <p>Demonstre sua presença
            no mundo digital com elegantes e modernos. Ideal para sites pessoais e institucionais.
          </p>
          <button>Ver Mais</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default About