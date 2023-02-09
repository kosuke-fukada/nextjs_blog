import { Inter } from '@next/font/google'
import Head from 'next/head'
import Post from '../components/organisms/Post'
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

  const tags = [
    'fugafuga'
  ]
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Post title='hogehoge' tags={tags} created={(new Date()).toDateString()} body={body} />
      </main>
    </>
  )
}
