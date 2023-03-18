import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Header } from '@/layout/Header'
import { Photo } from '@/layout/Photo'
import { Content } from '@/layout/Content'
import { Container } from '@/layout/Container'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dr. Maurício Torres - Ginecologia e Terapia Hormonal</title>
        <meta name="description" content="Site Pessoal do Dr. Maurício Torres, especialista em Ginecologia e Terapia Hormonal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#436681" />
        <link rel="icon" href="/img/favicon.png" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mauriciotorres.com.br/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dr. Maurício Torres - Ginecologia e Terapia Hormonal" />
        <meta property="og:image" content="https://mauriciotorres.com.br/img/arte_drmaurcio.png" />
        <meta property="og:url" content="https://mauriciotorres.com.br/" />
      </Head>

      <Header />

      <Container>
      <div className={styles.main}>

        <div className={styles.module_photo}>
          <Photo />
        </div>
        <div className={styles.module_content}>
          <Content />
        </div>
      </div>
      </Container>

    </>
  )
}
