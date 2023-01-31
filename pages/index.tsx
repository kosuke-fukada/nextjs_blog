import { Inter } from '@next/font/google'
import Head from 'next/head'
import Body from '../components/Body'
import Tag from '../components/Tag'
import Title from '../components/Title'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const body = `
  # h1

  ## h2

  ### h3

  * list
    * hoge
    * fuga
    * piyo
  
  * strong

  **hogeeeee**

  * strikethrough

  ~~fugafuga~~

  * italic

  _piyopiyo_
  `
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Title title='hogehoge' />
        <Tag tag='fugafuga' />
        <Body body={body} />
      </main>
    </>
  )
}
