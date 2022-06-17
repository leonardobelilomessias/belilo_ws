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
    <Link href="/"><a onClick={handleMenux}> Inicio</a></Link>
    <Link href="/about"><a onClick={handleMenux}> Sobre</a></Link>
    <Link href="/contact"><a onClick={handleMenux}> Contato</a></Link>

    <button onClick={handleMenux}>Fechar</button>
    </nav>
      
    </>
  )
}