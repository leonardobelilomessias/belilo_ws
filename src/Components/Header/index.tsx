import style from './styles.module.scss'
import {AiOutlineMenu} from 'react-icons/ai'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type HeaderProps =  {
  menux: boolean
  handleMenux:VoidFunction
}
export function Header({menux,handleMenux}:HeaderProps){
  const [path,setPath] =useState('')
  useEffect(()=>{
    setPath('/')
  },[])
  const router = useRouter()
  return(
    <>
  <header className={style.customHeader}>
     
    
    <Link href="/">
      <a onClick={()=>{setPath("/")}}>
        <h1> filsher </h1> 
      </a>
    </Link>

    <nav className={style.nav} >
    <Link href="/">
      <a className={router.asPath ==="/"?style.active:''}>
      <p>inicio</p> 
      <div/>
      </a>
    </Link>
    <Link href="/about">
      <a className={router.asPath ==="/about"?style.active:''}>
      <p>sobre</p> 
      <div/>
      </a>
    </Link>

    <Link href="/simulator">
      <a className={router.asPath ==="/simulator"?style.active:''}>
      <p>Simulador</p> 
      <div/>
      </a>
    </Link>
    <Link href="contact">
      <a className={router.asPath ==="/contact"?style.active:''}>
      <p>contato</p> 
        <div/>
        </a>
      </Link>
    </nav>
    <AiOutlineMenu  className={style.showMenu} size={30} onClick={handleMenux}/>

  </header>

    
  </>
  )
}