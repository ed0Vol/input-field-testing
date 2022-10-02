import type { NextPage } from 'next'
import { useState, ChangeEvent } from 'react'
import Head from 'next/head'
import validate from '../utils/validate'
import Input from '../component/Input'
import Button from '../component/Button'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [valueText, setValueText] = useState('')
  const [valueNumber, setValueNumber] = useState('')

  const handlerOnSubmit = (e: any) => {
    e.preventDefault()
    
  }

  const handlerClickText = () => {
    const valid = validate(valueText, 'text')
    alert(valid ? 'Это строка' : 'Это не строка')

  }

  const handlerClickNumber = () => {
    const valid = validate(valueNumber, 'number')
    alert(valid ? 'Это число' : 'Это не число')
  }

  const handlerChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target?.value || ''
    setValueText(value)
  }

  const handlerChangeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target?.value || ''
    setValueNumber(value)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title></title>
      </Head>

      <main className={styles.main}>
        <form onSubmit={handlerOnSubmit}>
          <div>
            <Input type='text' onChange={handlerChangeText} placeholder='Введите тект' />
            <Button type='submit' onClick={handlerClickText}>Проверить строку</Button>
          </div>
          <div>
            <Input type='text' onChange={handlerChangeNumber} placeholder='Введите число' />
            <Button type='submit' onClick={handlerClickNumber}>Проверить число</Button>
          </div>
          <Button type='submit'>Проверить формы</Button>
        </form>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
