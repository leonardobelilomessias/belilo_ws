import React from 'react'
import style from './testimonals.style.module.scss'

import Image from 'next/image'
import StarComent from '../../../../public/StarComents.png'

function Testimonals() {
  return (
    <>
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
    </>
  )
}

export default Testimonals