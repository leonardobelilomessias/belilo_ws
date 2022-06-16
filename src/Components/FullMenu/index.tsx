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
    <Link href="/contact"><a> Sobre</a></Link>

    <button onClick={handleMenux}>Fechar</button>
    </nav>
      
    </>
  )
}