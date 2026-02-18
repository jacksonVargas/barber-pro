// Componentes
import { Container } from '@/components/container'
import { Title } from '@/components/title'
import { CardServices } from './_components/card-services'

export function Services() {
  return (
    <Container>
      <section id='services' className='py-15'>
        <Title
          title='Transforme Seu Estilo com Nossos Serviços Premium'
          description='Cortes clássicos, barbas impecáveis e tratamentos modernos para o homem que busca excelência.'
        />

        <CardServices />
      </section>
    </Container>
  )
}