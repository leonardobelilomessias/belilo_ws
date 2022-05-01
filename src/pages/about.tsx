import React from 'react'

import style from '../styles/about.style.module.scss' 
import Head from 'next/head'

function About() {
  return (
    <>
    <Head>
      <title>Sobre</title>
    </Head>
    <div className={style.head}>
    <h1>&quot; Democratizamos a 
         <span> TECNOLOGIA </span>oferecendo produtos e serviços para que
         <span>TODOS</span> tenham <span> OPORTUNIDADE </span> 
          e de ter uma experiencia <span> DIGNA </span>  no <span> DIGITAL </span>  &quot;
          </h1>
    </div>
    <div className={style.firstSection}>
      
    <div className={style.itemSection}>
      <div className={style.imageSectionIdea}></div>
      <div className={style.infoSection}>
           <h1>Quem somos ?</h1>
          <h2>Somos Experts em Executar Ideias</h2>
          <h3>
            Fazemos produtos, ideias, sonhos e negocios sair do campo da imaginação e colocamos em pratica no mundo digital.
          </h3>
        <button>Ver Serviços</button>
      </div>

    </div>
    
    <div className={style.itemSection}>
    <div className={style.imageSectionResult}></div>
      <div className={style.infoSection}>
        <h1>Oque Fazemos?</h1>
        <h2>Potencializamos Resultados</h2>
        <h3>Autentou em 67,8% o numero de negocios feito na internet ou via aplicativos.
          Com as tecnologias mais avançadas damos poderes digitais para você atingir o seu potencial maximo,
          Alcançando novas pessoas, conquisando novos cliente e aumentando sua lucratividade.
        </h3>
        <button>Veja Casos de sucesso </button>
      </div>
    </div>

    <div className={style.itemSection}>
      <div className={style.imageSectionDevelop}></div>
      <div className={style.infoSection}>
          <h1>Como fazemos</h1>
          <h2>Desenvolvemos Produtos tecnologicos</h2>
          <h3>Desenvolvemos serviços tecnológicos como sites institucionais, blogs, ecommercer e aplicativos 
            e outros diversos tipos de ferramentas que auxiliam negócios físicos e digitais .
          </h3>
          <button>Fazer Simulação</button>
        </div>
      </div>


    </div>

    </>
  )
}

export default About