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
      <a href="#">Inicio</a>
      <a href="#">Blog</a>
      <a href="#">Portifolio</a>
      <a href="#">Tecnologias</a>
      <a href="#">Serviços</a>

    <button onClick={handleMenux}>Fechar</button>
    </nav>
      
    </>
  )
}