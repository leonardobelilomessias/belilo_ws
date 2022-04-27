import React from 'react'
import Image from 'next/image'
import style from './brands.style.module.scss'
import {MdTaskAlt} from 'react-icons/md'
import Aws from '../../../../public/img/brands/aws.png'
import Google from '../../../../public/img/brands/goole.png'
import Microsoft from '../../../../public/img/brands/micro.png'
import Apple from '../../../../public/img/brands/mac.png'
import FaceBook from '../../../../public/img/brands/face.png'
import StarComent from '../../../public/StarComents.png'
import Link from 'next/link'
function Brands() {
  return (
    <>
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
    </>
  )
}

export default Brands