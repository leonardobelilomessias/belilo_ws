import Image from 'next/image'
import React from 'react'
import style from '../styles/contact.style.module.scss'
import contactUs from '../../public/contactus3.jpg'
function Contact() {
  return (
    <>
    <div className={style.container}>
          <h1>Contato</h1>
      <div className={style.content}>
          <div className={style.img}>
            <Image src={contactUs} alt='contact' layout='fill' objectFit='fill'/> 
          </div>
          <form action="">
            <label htmlFor="email">Email</label>
            <input type="text" />
            <label htmlFor="message">Mensagem</label>
            <textarea id="w3review" name="w3review" placeholder='Digite sua mensagem aqui'>
            </textarea>
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact