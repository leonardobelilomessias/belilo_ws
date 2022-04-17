import Link from 'next/link'
import style from './styles.module.scss'
type FullMenuProps={
  menux:boolean
  handleMenux:VoidFunction
}

export function FullMenu({menux,handleMenux}:FullMenuProps){
  return(
    <>
    <nav className={style.menu}>
    <p>MENU</p>
    <Link href="/"><a> Inicio</a></Link>
    <Link href="/about"><a> Sobre</a></Link>
      <a href="#">Serviços</a>
      <a href="#">Preços</a>
      <a href="#">Contato</a>

    <button onClick={handleMenux}>Fechar</button>
    </nav>
      
    </>
  )
}