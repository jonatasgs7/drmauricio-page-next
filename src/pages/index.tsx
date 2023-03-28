import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Header } from '@/layout/Header'
import { Photo } from '@/layout/Photo'
import { Content } from '@/layout/Content'
import { Container } from '@/layout/Container'
import { Depoimentos } from '@/layout/Depoimentos'
import { DepoimentoBox } from '@/components/DepoimentoBox'

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

      <div className="mainContent">
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
      </div>

      <Depoimentos>

        <DepoimentoBox autor="Mônica" depoimento="Comecei a me consultar com dr Mauricio quando tinha 20 anos, no HSJ
Mudei meu convenio para voltar a ser atendida por ele, pois é um ginecologista excelente, além de muito humano. Sempre nos atende com prontidão e eficiência" />
        <DepoimentoBox autor="Débora" depoimento="Dr Mauricio é um médico muito bom e muito atencioso , ótimo ginecologista , super indico esse profissional!" />
        <DepoimentoBox autor="Isabella Feitosa" depoimento="Este médico é um profissional super atencioso, carismático, possui credibilidade e muito profissional." />
        <DepoimentoBox autor="Ângela Aguiar" depoimento="Excelente profissional, empático, gentil e sempre disponível para tirar dúvidas. Médico para vida!!!" />
        <DepoimentoBox autor="Iolene Maria" depoimento="Dr.Mauricio é um ótimo médico comprometido com seu paciente, eu confio no seu trabalho, os tratamentos que fiz no decorrer de 2020 foram supervisionados por ele, tiveram resultados excelentes. Gratidão a Deus ." />
        <DepoimentoBox autor="Thais Fagundes de Rezende" depoimento="É o melhor Ginecologista de Teresópolis, muito eficiente e atencioso. Super Recomendo. Tira todas as suas dúvidas." />
        <DepoimentoBox autor="Kessya Ourique" depoimento="Difícil encontrar profissional atencioso e disposto a esclarecer todas suas dúvidas hoje em dia. Obrigada pela paciência e atenção" />
        <DepoimentoBox autor="Daniela Ricciardi" depoimento="Excelente profissional, muito prestativo e ele se preocupa de verdade com os pacientes. Melhor médico que conheci na vida. Super recomendo" />
        <DepoimentoBox autor="Jéssica" depoimento="Um excelente médico, muito educado e atencioso.
Seu atendimento é com clareza e apresenta um grande conhecimento. Super indico!!" />
        <DepoimentoBox autor="Érika Peclat de Araujo" depoimento="O melhor profissional na área de ginecologia! Sempre recomendo a todas as mulheres que conheço, pois além da assistência médica ser impecável ele é muito atencioso!" />
        <DepoimentoBox autor="Thatiana Lopes" depoimento="Dr. Maurício além de ser médico ele é humano, entende nossos casos, paciente, detalhista, atencioso! Indico ele para todas as amigas e conhecidas! Me identifiquei com ele e com o atendimento super humanizado. Sou atendimento pela Dra. Dani também, que aliás, também é um amor de pessoa! Só tenho a agradecer a ambos, ao consultório e a maravilhosa Regina, que é uma pessoa com um coração de OURO, um amorzinho e deixa a gente mega relaxada antes das consultas e exames. São totalmentes de confianças! Só tenho a agradecer!" />
        <DepoimentoBox autor="Sandy" depoimento="Excelente profissional, sempre que preciso ele me atende com urgência, explica tudo direitinho e nos deixa a vontade." />

      </Depoimentos>

    </>
  )
}
