import style from './styles.module.scss'
export function Footer(){
  return(
    <footer className={style.footer}>
      <div className={style.allContent}>
      <h1>Belilo</h1>
      <div className={style.midias}>
        <h3>Midias sociais</h3>
        <p>Youtube   |  Intagram </p>

      </div>

      <div className={style.links}>
        <h3>Links</h3>
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Blog</li>
          <li>Contato</li>
        </ul>
        </div>
        </div>
        <div  className={style.finishLabel}>Feito por Belilo | 2022</div>
    </footer>
  )
}