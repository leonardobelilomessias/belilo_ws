import React from 'react'
import style from '../styles/contact.style.module.scss'
function Contact() {
  return (
    <>
    <div className={style.container}>
      <h1>Contato</h1>

      <form action="">
      <label htmlFor="email">Email</label>
      <input type="text" />
      <label htmlFor="message">Mensagem</label>
      <textarea id="w3review" name="w3review" placeholder='Digite sua mensagem aqui'>
      </textarea>
      <button>Enviar</button>
      </form>

      </div>
    </>
  )
}

export default Contact