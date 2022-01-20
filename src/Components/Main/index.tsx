import Image from 'next/image'
import style from './styles.module.scss'
import statue from '../../../public/mic.png'
import devices from '../../../public/devices.png'
import {MdTaskAlt} from 'react-icons/md'


export function Main(){
  return(
    <main className={style.main}>
      <div className={style.firstSection}>
        <div className={style.headLine}>
          <div className={style.textHeadline}>
            <h1>Desenvolvimento de softwares, Apps e sites.</h1>
            <h2> Tire sua ideia do papel com nossos serviços especializados</h2>
            <h3>Somos uma empresa especializada em criação de ferramentas tecnologicas na implementação de recuso para a aceleração de negocios no mundo digital</h3>
            <button>Veja Exemplos</button>
          </div>
        </div>
        <div className={style.imageHeadline}>
          <Image  src={statue} alt='statue'></Image>
        </div>
      </div>

        <section className={style.devices}>
          <div>
            <h1>Seu projeto em todos os dispositivos</h1>
            <p> Tabalhamos a resposividade do seu projeto para que ele esteja adequado em todos os tipos de dispositivos para os seus clientes.</p>
          </div>
          <Image src={devices}  alt='devices'/>
        </section>

        <section className={style.listServices}>
          <h1>Nossos serviços disponiveis</h1>
          <div className={style.service}>
            <div className={style.itemService}>
                <MdTaskAlt size={40}/>
              <h2>Desenvolvimento</h2>
              <p>Desenvolvimento de sites com tecnologias de ponta que são tendencias de mercado</p>
            </div>
            <div className={style.itemService}>
              <MdTaskAlt size={40}/>
              <h2>Iu/Ix</h2>
              <p>Interfaces que  cativam cada usario prezando por uma experiencia agradavel</p>
            </div>
            <div className={style.itemService}>
                <MdTaskAlt size={40}/>
              <h2>Seo</h2>
              <p>Otimização para ser encontrado nos mecanismos de busca </p>
            </div>
          </div>

          <div className={style.service}>
            <div className={style.itemService}>
                <MdTaskAlt size={40}/>
              <h2>Ecommerce</h2>
              <p>Criação da sua loja virtual para faturar mais com seus produtos fisicos</p>
            </div>
            <div className={style.itemService}>
                <MdTaskAlt size={40}/>
              <h2>Email Marketing</h2>
              <p>Serviço  de email personalizado para manter contato com seus clientes</p>
            </div>
            <div className={style.itemService}>
              <MdTaskAlt size={40}/>
              <h2>Blog</h2>
              <p>Criação de blog para você atualizar sua informaçoes </p>
            </div>
          </div>
        </section>
        
        <section className={style.examples}>
          <h1>Alguns exemplos de casos</h1>
          <div className={style.models}>
          <div className={style.model}>modelo 1</div>
          <div className={style.model}>modelo2</div>
          <div className={style.model}>modelo3</div>
          </div>
        </section>
        
        <section className={style.contact}>
          <h1>Entre em contato conosco e saiba mais.</h1>
          <button>Entrar em contato</button>
        </section>
    </main>
  )
}