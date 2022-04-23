import React from 'react'
import style from './stepSimulator.styles.module.scss'
function Step({title,description,step,current}) {

  return (
    <div>

      <div><p className={current ===step ? style.current: current > step ? style.old: style.future }>{title}</p></div>
      <div><p>{description}</p></div>
    </div>
  )
}

export default Step