// Hooks
import Image from 'next/image'

// Componentes
import { Container } from '@/components/container'
import { Title } from '@/components/title'
import { CardProfessionalsProps } from '@/types/card-professionals'
import { Card } from '@/components/ui/card'

// Imagens
import joao from './assets/barber-joao.jpg'
import ricardo from './assets/barber-ricardo.jpg'
import pedro from './assets/barber-pedro.jpg'
import lucas from './assets/barber-lucas.jpg'

// Icones
import { Facebook, Instagram } from 'lucide-react'

export function Professionals() {
  const cards: CardProfessionalsProps[] = [
    {
      id: 1,
      image: joao,
      name: 'João Silva',
      info: 'Especialista em Cortes Clássicos',
      linkFacebook: '#',
      linkInstagram: '#',
    },
    {
      id: 2,
      image: ricardo,
      name: 'Ricardo Santos',
      info: 'Mestre em Barboterapia',
      linkFacebook: '#',
      linkInstagram: '#',
    },
    {
      id: 3,
      image: pedro,
      name: 'Pedro Alves',
      info: 'Cortes Modernos e Tendências',
      linkFacebook: '#',
      linkInstagram: '#',
    },
    {
      id: 4,
      image: lucas,
      name: 'Lucas Mendes',
      info: 'Designer de Barba',
      linkFacebook: '#',
      linkInstagram: '#',
    },
  ]

  return (
    <Container>
      <section id='professionals' className='py-15'>
        <Title
          title='Conheça Nossos Mestres Barbeiros'
          description='Uma equipe de profissionais apaixonados por excelência e arte em cada corte.'
        />

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {cards.map((card) => (
            <Card
              key={card.id}
              className='px-5 w-full flex flex-col items-center text-center gap-3'
            >
              <Image
                src={card.image}
                alt={card.name}
                quality={100}
                priority
                className='rounded-full w-35 h-35 border-3 border-amber-500'
              />

              <h3 className='text-amber-500'>{card.name}</h3>
              <p className='text-zinc-500 md:text-sm mb-5'>{card.info}</p>

              <div className='flex items-center gap-4 mt-auto'>
                <a
                  href={card.linkFacebook}
                  target='_blank'
                  className='text-zinc-500 hover:text-amber-500'
                >
                  <Facebook size={20} />
                </a>
                <a
                  href={card.linkInstagram}
                  target='_blank'
                  className='text-zinc-500 hover:text-amber-500'
                >
                  <Instagram size={20} />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </Container>
  )
}
