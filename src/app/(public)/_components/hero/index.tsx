// Hooks
import Image from 'next/image'
import heroBg from '@/assets/hero-barbershop.jpg'

// Icones
import { Scissors, ArrowRight } from 'lucide-react'

// Componentes
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section
      id='hero'
      className='relative min-h-screen overflow-hidden flex items-center justify-center px-5'
    >
      {/* Imagem */}
      <div className='absolute inset-0 z-0'>
        <Image
          src={heroBg}
          alt='Image da hero'
          fill
          quality={100}
          priority
          className='object-cover'
        />
        <div className='absolute inset-0 bg-black/60' />
      </div>
      
      {/* Texto */}
      <div className='w-full max-w-5xl mx-auto relative z-1 text-center'>
        <h3 className='text-amber-500 text-lg'>O Verdadeiro Estilo Masculino Começa Aqui.</h3>
        <h1 className='text-white text-xl md:text-2xl mb-10'>Transforme seu visual com a precisão e a tradição de nossos mestres barbeiros. Agende seu horário e experimente a diferença.</h1>
        <div className='flex justify-center items-center gap-3'>
          <a href='#' className='transition-all duration-300 hover:-translate-y-1 py-2 px-5 rounded bg-amber-500 text-black text-sm font-semibold flex items-center gap-2'>
            <Scissors />
            Agendar Corte
          </a>
          <a href='#' className='transition-all duration-300 hover:-translate-y-1 py-2 px-5 rounded bg-amber-500 text-black text-sm font-semibold flex items-center gap-2'>
            <ArrowRight />
            Ver Serviços
          </a>
        </div>
      </div>
    </section>
  )
}
