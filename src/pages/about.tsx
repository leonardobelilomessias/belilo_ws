import React from 'react'
import style from '../styles/about.style.module.scss' 
import Head from 'next/head'
import Image from 'next/image'
import Lamp from '../../public/lampada.png'
import Results from '../../public/compare.png'
import Tecnology from '../../public/technology.png'
function About() {
  return (
    <>
    <Head>
      <title>Sobre</title>
    </Head>




    <div className={style.firstSection}>

    <div className={style.itemSection}>

      <div className={style.imageSection}>
        <Image alt='idea' src={Lamp} width={300} height={300}/>
      </div>
      <div className={style.infoSection}>
        <h1>Quem somos ?</h1>
        <h2>Somos Experts em Executar Ideias</h2>
        <h3>Fazemos produtos, ideias, sonhos e negocios sair do campo da imaginação e colocamos em pratica no mundo digital.
        </h3>
        <button>Ver Serviços</button>
      </div>

    </div>
    <hr />
    <div className={style.itemSection}>
      <div className={style.imageSection}>
        <Image alt='idea' src={Results} width={300} height={300}/>
      </div>
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
<hr />
    <div className={style.itemSection}>
      <div className={style.imageSection}>
        <Image alt='idea' src={Tecnology} width={300} height={300}/>
      </div>
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