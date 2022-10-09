import { FC, memo } from 'react'
import { Popup } from '../types/types'
import styles from '../styles/Popup.module.css'


const Popup: FC<Popup> = (props) => {
  const { children, onClick, className, ...OldProps } = props
  return (
    <div className={`${styles.popupWrapper} ${className ? className : ''}`}>
      <div className={styles.close} onClick={onClick}></div>
      <div {...OldProps} className={styles.text} >{children}</div>
    </div>

  )
}

export default memo(Popup)