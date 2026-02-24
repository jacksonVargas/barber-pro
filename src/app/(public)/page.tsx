// Componentes
import { Header } from './_components/header'
import { Hero } from './_components/hero'
import { Services } from './_components/services'
import { Professionals } from './_components/professionals'
import { Contact } from './_components/contact'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Professionals />
      <Contact />
    </main>
  )
}