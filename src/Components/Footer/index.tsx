import style from './styles.module.scss'
import {FiYoutube,FiInstagram} from 'react-icons/fi'
export function Footer(){
  return(
    <footer className={style.footer}>
      <div className={style.allContent}>
      <h1>Filsher</h1>
      <div className={style.midias}>
          <h3></h3>
          <div className={style.logo}>
            <p ><FiYoutube size={20} /><span>Youtube</span></p> 
            <p><FiInstagram size={20} /><span>Instagram</span>  </p>
          </div>

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
        <div  className={style.finishLabel}><p></p></div>
    </footer>
  )
}