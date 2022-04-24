import React from 'react'
import style from './stepSimulator.styles.module.scss'
import {FaCheckCircle} from 'react-icons/fa'
import {ImRadioUnchecked,ImRadioChecked} from 'react-icons/im'
function Step({title,description,step,current}) {

  return (
    <div className={style.stepsItens}>
      <div className={style.stepIcon}>
      {current >step && <FaCheckCircle size={24} color={'#0085FF'}/>}
      {current < step && <ImRadioUnchecked size={24} color={'#a7a4a4'}/>}
      {current === step && <ImRadioChecked  size={24} color={'#0085FF'}/>}
      </div>
      <div className={current ===step ? style.current: current > step ? style.old: style.future }>
        <p >{title}</p>
      </div>
      
      <div className={current ===step ? style.current: current > step ? style.old: style.future }>
        <span>{description}</span>
      </div>
    </div>
  )
}

export default Step