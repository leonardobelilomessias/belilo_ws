import style from './styles.module.scss'
export function Header(){
  return(
  <header className={style.customHeader}>
    <h1> BELILO</h1> 
    <nav>
      <a href="#">Inicio</a>
      <a href="#">Blog</a>
      <a href="#">Portifolio</a>
      <a href="#">Tecnologias</a>
      <a href="#">Serviços</a>
    </nav>
      <button> Contact</button>
  </header>
  )
}