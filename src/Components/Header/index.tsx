import style from './styles.module.scss'
import {AiOutlineMenu} from 'react-icons/ai'
import Link from 'next/link'

type HeaderProps =  {
  menux: boolean
  handleMenux:VoidFunction

}
export function Header({menux,handleMenux}:HeaderProps){

  return(
    <>
  <header className={style.customHeader}>
    <h1> Belilo</h1> 
    <nav className={style.nav}>
    <Link href="/"><a> Inicio</a></Link>
    <Link href="/about"><a> Sobre</a></Link>
    <Link href="/services"><a> Serviços</a></Link>
      <a href="#">Simulador</a>
      <a href="#">Contato</a>
    </nav>
    <AiOutlineMenu  className={style.showMenu} size={30} onClick={handleMenux}/>

  </header>
      {menux && <nav className={style.navMobile}>
      <Link href="/"><a> Inicio</a></Link>
      <Link href="/about"><a> Sobre</a></Link>
      <a href="#">Serviços</a>
      <a href="#">Preços</a>
      <a href="#">Contato</a>
    </nav>}
    
  </>
  )
}