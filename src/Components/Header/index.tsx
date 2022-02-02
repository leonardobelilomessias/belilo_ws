import style from './styles.module.scss'
import {AiOutlineMenu,AiOutlineQuestionCircle} from 'react-icons/ai'
import { useState, } from 'react'

type HeaderProps =  {
  menux: boolean
  handleMenux:VoidFunction

}
export function Header({menux,handleMenux}:HeaderProps):any{
  const [menu,setMenu] = useState(false)
  function handleMenu(){
    setMenu(!menu)
  }
  return(
    <>
  <header className={style.customHeader}>
    <h1> Belilo</h1> 
    <nav className={style.nav}>
      <a href="#"> Inicio</a>
      <a href="#">Sobre</a>
      <a href="#">Blog</a>
      <a href="#">Contato</a>
    </nav>
    <AiOutlineMenu  className={style.showMenu} size={30} onClick={handleMenux}/>

    
    
{/*       <button> Contact</button> */}
  </header>
      {menux && <nav className={style.navMobile}>
      <a href="#">Inicio</a>
      <a href="#">Blog</a>
      <a href="#">Portifolio</a>
      <a href="#">Tecnologias</a>
      <a href="#">Serviços</a>
    </nav>}
    
  </>
  )
}