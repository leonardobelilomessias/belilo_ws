import Image from 'next/image'
import style from './styles.module.scss'
import {MdTaskAlt} from 'react-icons/md'
import Aws from '../../../public/img/brands/aws.png'
import Google from '../../../public/img/brands/goole.png'
import Microsoft from '../../../public/img/brands/micro.png'
import Apple from '../../../public/img/brands/mac.png'
import FaceBook from '../../../public/img/brands/face.png'
import StarComent from '../../../public/StarComents.png'

export function Main(){
  return(
    <main className={style.main}>
      <div className={style.firstSection}>
            
        <div className={style.headLine}>
          <div className={style.textHeadline}>
            <h4>A Primeira impressão é a que fica no digital</h4>
            <h1>Desenvolvimento de Sites e Aplicativos</h1>
            <h3>Somos especialistas em tecnologia e damos poderes as suas ideia no mundo digital.</h3>
            <button className={style.buttonHeadline}>Simular meu projeto</button>
          </div>
        </div>
        <div className={style.imageHeadline}>
          <div>
            
          </div>
        </div>
      </div>
      <section className={style.brands}>
        <p>Empresas parceiras</p>
        <div className={style.imgsBrands}>
          <div className={style.brand}>
            <div >

          <Image  src={Aws} width={50} height={50} alt="aws"  ></Image>
            </div>
            <p>Amazon</p>
          </div>
          <div className={style.brand}>
            <div>

            <Image src={Google} width={50} height={50}  alt="aws"></Image>
            </div>
            <p>Google</p>
          </div>
          <div className={style.brand}>
            <div>

            <Image src={FaceBook} width={50} height={50} alt="aws"></Image>
            </div>
            <p>Facebook</p>
          </div>
          <div className={style.brand}>
            <div>

            <Image className={style.imgBrand}  width={50} height={50} src={Microsoft}  alt="aws"></Image>
            </div>
            <p>Microsoft</p>
          </div>
          <div className={style.brand}>
            <div>
            <Image className={style.imgBrand} width={50} height={50} src={Apple}  alt="aws"></Image>
            </div>
            <p>Apple</p>
          </div>
        </div>
      </section>
        <section className={style.digitalServices}>
          <div className={style.imageDigitalService}>
          </div>
          <div className={style.textDigitalService}>
            <div >
                <h1>Tire sua ideia do papel e coloque no digital.</h1>
            </div>
            <div>
                <ul>
                  <li>Site institucional</li>
                  <li>Ecommerce</li>
                  <li>LeadingPage</li>
                  <li>Aplicativo mobile</li>
                  <li>Sistema interno</li>
                </ul>
            </div>
          </div>
        </section>
        <section className={style.consultFree}> 
          <p>Ainda não sabe como digitalizar seu negocio? Te ajudamos com isso de graça!</p>
          <button>Consultoria Gratis</button>
        </section>

        <section className={style.examples}>
          <h1>Casos de Sucesso</h1>
          <div className={style.models}>
            <div className={style.model}><p>Natcults</p></div>
            <div className={style.model}><p>Puzzle Piece</p></div>
            <div className={style.model}><p>Amazon Delivery</p></div>
          </div>
          <div className={style.models}>
            <div className={style.model}><p>HubStack</p></div>
            <div className={style.model}><p>Legacy Conect</p></div>
            <div className={style.model}><p>GoLana</p></div>
          </div>
        </section>

        <section className={style.depoiment}>
          <p className={style.titleDepoiment}>Depoimentos:</p>
            <div className={style.contentDepoiment}>
                <Image src={StarComent} alt='StarComents'></Image>
              <p >
              “ Tivemos um experiencia incrivel utilizando o serviços Belilo. 
              Tinhamos muito medo de não dar certo ,Mas cada explicação sobre o funcionamento
              do negocio me fazia tem mais confiança do meu sonho. Enfim hoje é uma realidade”
              </p>
          <p className={style.nameDepoiment}>Cezar Agnus - CaseinCase</p>
            </div>

        </section>


        <section className={style.listServices}>
          <h1>Mais sobre nossos serviços</h1>
          <div className={style.service}>
            <div className={style.itemService}>
                <MdTaskAlt size={40}/>
              <h2>Desenvolvimento</h2>
              <p>Pesquisamos, elaboramos e criamos o produto com as melhores tenologias do mercado</p>
            </div>
            <div className={style.itemService}>
              <MdTaskAlt size={40}/>
              <h2>Seo</h2>
              <p>Apareça em primeiro lugar no Google. Trabalhamos com otimização de SEO(Search Engine Optimization)</p>
            </div>
            <div className={style.itemService}>
                <MdTaskAlt size={40}/>
              <h2>Desing</h2>
              <p>Criação de Layout Baseado em UI/UX. Garantido a melhor experiência do usuario.</p>
            </div>
          </div>

          <div className={style.service}>
            <div className={style.itemService}>
                <MdTaskAlt size={40}/>
              <h2>Responsividade</h2>
              <p>Suas paginas e sites em qualquer tela de dispositivo. Para que seu produto estaja disponivel em todas plataformas</p>
            </div>
            <div className={style.itemService}>
                <MdTaskAlt size={40}/>
              <h2>Dashboard</h2>
              <p>Dashboard personalizada para facilitação da organização de dados e informaçoes do software, site, sistema ou app.</p>
            </div>
            <div className={style.itemService}>
              <MdTaskAlt size={40}/>
              <h2>Integração</h2>
              <p>Conectamos nossos serviços e produtos com serviços externos como facebook,Google, Instagram, Mercado Livre Etc. </p>
            </div>
          </div>
        </section>

        
        <section className={style.contact}>
          <div className={style.imgContact}>

          </div>
          <div className={style.itemsContact}>
            <h1>Entre agora para o digital!</h1>
            <button>Entrar em contato</button>
          </div>

        </section>




        
        
    </main>
  )
}
