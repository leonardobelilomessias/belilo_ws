import React from 'react';
import Result from '../../public/result.jpg';
import Develop from '../../public/develop.jpg';
import Idea from '../../public/idea.jpg';
import style from '../styles/about.style.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import Team from '../../public/banner.jpg';
import bigTechs from '../utils/bigTechs';
import Hand from '../../public/hand.jpg'
const infoBox = [
  {title:'Quem somos ?',subTitle:'Somos Experts em Executar Ideias',description:'Fazemos produtos, ideias, sonhos e negocios sair do campo da imaginação e colocamos em pratica no mundo digital.'
  ,img:Result,cta:'Ver Serviços'},
  {title:'Oque Fazemos?',subTitle:'Potencializamos Resultados',description:' Autentou em 67,8% o numero de negocios feito na internet ou via aplicativos.Com as tecnologias mais avançadas damos poderes digitais para você atingir o seu potencial maximo,Alcançando novas pessoas, conquisando novos cliente e aumentando sua lucratividade ',img:Idea,cta:'Veja Casos de sucesso '},
  {title:'Como fazemos',subTitle:'Desenvolvemos Produtos tecnologicos',description:'Desenvolvemos serviços tecnológicos como sites institucionais, blogs, ecommercer e aplicativos e outros diversos tipos de ferramentas que auxiliam negócios físicos e digitais .',img:Develop,cta:`Fazer Simulação      `}
];



function About() {
  return (
    <>
    <Head>
      <title>Sobre</title>
      </Head>
    <main className={style.main}>
      <div className={style.head}>
      <div className={style.title}>
        <h1>A democratização da tecnologia</h1>
        <p>
          Nossa missão é fornecer produtos da mais alta qualidade de forma acessivel para o maior numero de pessoas.
        </p>
        </div>
      </div>
        
    <div className={style.firstSection}>
          <h1 className={style.moreAbout}>Um pouco mais sobre nós:</h1>
          
          {infoBox.map(({title,subTitle,cta,description,img},index) => (
            <>
            <div key={title} className={`${style.itemSection} ${index==1 && style.rowReverse}`}>
              <div className={style.imageSection}>
                <Image alt='result'src={img} layout='fill' objectFit='cover' />  
              </div>
              <div className={style.infoSection}>

                    <h1>{title}</h1>
                    <h2>{subTitle}</h2>
                    <p>{description}</p>
                    <button>{cta} →</button>
              </div>
            </div>
            </>  
          ))}
        </div>
        <div className={style.secondSection}>
          <div className={style.imageSecondSection}>
          <Image alt='result'src={Team} layout='fill' objectFit='cover' />oi
          </div>
          <div className={style.textSecondSection}>
            <h1> Ferramentas de ultima geração</h1>
            <p>Crie site inovadores com alta performace com as tecnologias de ponta do mercado e saia na frente no desenvolvimento de suas ideas e negocios !</p>
            <button>clique aqui e saiba</button>
          </div>
        </div>
        <div className={style.felows}>
          <h1>Parceria com as maiores Bigtechs do mercado</h1>
          <div className={style.company}>
              {bigTechs.map((company,key) => (
                <div key={company.name} >
                  <Image alt={company.name} src={company.img} layout='fill' objectFit='contain'/>
                  
                  </div>
              ))}
            </div>
        </div>

  </main>
    </>
  )
}

export default About