import type { NextPage } from 'next'
import { Header } from '../components/header/Header'
import Head from 'next/head'
import { Main } from '../components/main/Main'
import { Section } from '../components/section/Section'
import { About } from '../components/about/About'
import { Contact } from '../components/contact/Contact'
import { Footer } from '../components/footer/Footer'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Augusto Meireles - Front End Developer</title>
        <meta name="" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main/>
      <Section/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
