import type { NextPage } from 'next'
import { useState, ChangeEvent, useEffect } from 'react'
import { checkType, checkLength } from '../utils/validate'
import Input from '../component/Input'
import Button from '../component/Button'
import texts from '../config/texts'
import checkSecrets from '../utils/checkSecrets'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import mars from '../styles/mars.gif'
import Popup from '../component/Popup'

const Home: NextPage = () => {
  const [text, setValueText] = useState({
    value: '',
    validType: false,
    validLength: false
  })
  const [number, setValueNumber] = useState({
    value: '',
    validType: false,
    validLength: false
  })
  const [popupValue, setPopupValue] = useState('')

  const handlerClickText = () => {
    const secrets = checkSecrets(text.value)
    if (secrets) return setPopupValue(secrets)

    setPopupValue(text.validType ? texts.errorMessage.text.pass : texts.errorMessage.text.failed)
  }

  const handlerClickNumber = () => {
    const secrets = checkSecrets(number.value)
    if (secrets) return setPopupValue(secrets)

    setPopupValue(number.validType ? texts.errorMessage.number.pass : texts.errorMessage.number.failed)
  }

  const handlerChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target?.value || ''
    setValueText({ ...text, value: value, validLength: !checkLength(value, 2, 100), validType: !!checkType(value, 'text') })
  }

  const handlerChangeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target?.value || ''
    setValueNumber({ ...number, value: value, validLength: !checkLength(value, 0, 9), validType: !!checkType(value, 'number') })
  }

  const handleClickPlanet = () => {
    setPopupValue(texts.secrets.sClick)
  }

  const handleClosePopup = () => {
    setPopupValue('')
  }

  useEffect(() => {
    setPopupValue(texts.startPage)
  }, [])

  return (
    <div className={styles.containerWrapper}>
      {popupValue && <Popup className={styles.popup} onClick={handleClosePopup}>{popupValue}</Popup>}
      <div className={`${styles.container} ${popupValue && styles.blur}`}>
        <main className={styles.main}>
          <div className={styles.inputForm}>
            <Input type='text' className={styles.input} onChange={handlerChangeText} placeholder={texts.placeholderText} />
            <Button type='submit' className={styles.button} onClick={handlerClickText} disabled={text.validLength}>{texts.titleBtnText}</Button>
            {text.validLength && <p className={styles.errorLength}>{texts.textLength.text}</p>}
          </div>
          <div className={styles.inputForm}>
            <Input type='text' className={styles.input} onChange={handlerChangeNumber} placeholder={texts.placeholderNumber} />
            <Button type='submit' className={styles.button} onClick={handlerClickNumber} disabled={number.validLength}>{texts.titleBtnNumber}</Button>
            {number.validLength && <p className={styles.errorLength}>{texts.textLength.number}</p>}
          </div>
        </main>
        <footer className={styles.footer}>
          <Image src={mars} width={200} height={200} className={`${styles.mars} ${styles.rotation}`} onClick={handleClickPlanet} />
        </footer>
      </div>
    </div>
  )
}

export default Home
