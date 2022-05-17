import style from './styles.module.scss'
import Schedule from './Schedule'
import FirstSection from './FirstSection'
import Brands from './Brands'
import Cases from './Cases'
import Testimonals from './Testimonals'
import ListServices from './ListServices'
import Contact from './Contact'
import DataInfo from './DataInfo'
import Respect from './Respect'
import DigitalServices from './DigitalServices'
import Banner from './Banner'

export function Main(){
  return(
    <>
    <main className={style.main}>
      <FirstSection/>

        <Brands />
        <Respect/>
       <DigitalServices/> 
        <Schedule />
        <Banner/>
        <section className={style.consultFree}> 
          <p>Ainda não sabe como digitalizar seu negocio? Te ajudamos com isso de graça!</p>
          <button>Consultoria Gratis</button>
        </section>
        <DataInfo/>
        <Testimonals/>
        <ListServices/>
        <Contact/>

    </main>
    </>
  )
}
