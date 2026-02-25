// Hooks
import Image from 'next/image'
import { Calendar } from 'lucide-react'

// Componentes
import { Card } from '@/components/ui/card'
import { CardServicesProps } from '@/types/card-services'

// Imagens
import img01 from '../assets/img01.jpg'
import img02 from '../assets/img02.jpg'
import img03 from '../assets/img03.jpg'
import img04 from '../assets/img04.jpg'
import img05 from '../assets/img05.jpg'
import img06 from '../assets/img06.jpg'

export function CardServices() {
  const cards: CardServicesProps[] = [
    {
      image: img01,
      title: 'Corte Clássico',
      info: 'Corte preciso e estilizado de acordo com o seu perfil.',
      price: '60',
    },
    {
      image: img02,
      title: 'Barba Tradicional',
      info: 'Modelagem e finalização com toalha quente.',
      price: '45',
    },
    {
      image: img03,
      title: 'Combo Master',
      info: 'Corte + Barba + Lavagem.',
      price: '95',
    },
    {
      image: img04,
      title: 'Tratamento Facial',
      info: 'Hidratação e revitalização para a pele masculina.',
      price: '80',
    },
    {
      image: img05,
      title: 'Dia do Noivo',
      info: 'Corte especial para noivos com champanhe.',
      price: '150',
    },
    {
      image: img06,
      title: 'Corte Kids',
      info: 'Corte divertido para os pequenos cavalheiros.',
      price: '40',
    },
  ]

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {cards.map((card) => (
        <Card key={card.title} className='pt-0 h-full'>
          <div className='relative w-full h-60'>
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes='(max-width: 768px), 100vw, 33vw'
              className='object-cover rounded-t-xl'
            />
          </div>

          <div className='px-5 flex flex-col flex-1'>
            <h3 className='text-lg text-amber-500'>{card.title}</h3>
            <p className='md:text-sm text-zinc-500 mb-3'>{card.info}</p>
            <p className='text-lg text-amber-500 font-semibold mb-3'>
              {Number(card.price).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>

            <a
              href='#'
              className='mt-auto py-2 bg-black font-medium text-amber-500 border border-amber-500 hover:bg-amber-500 hover:text-black rounded md:text-sm flex justify-center items-center gap-3'
            >
              <Calendar size={18} />
              Agendar
            </a>
          </div>
        </Card>
      ))}
    </div>
  )
}
