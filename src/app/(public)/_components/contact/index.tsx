import { MenuProps } from '@/types/menu'
import { Scissors } from 'lucide-react'

export function Contact() {
  const links: MenuProps[] = [
    {
      href: '#hero',
      label: 'Início',
    },
    {
      href: '#services',
      label: 'Serviços',
    },
    {
      href: '#professionals',
      label: 'Profissionais',
    },
    {
      href: '#contact',
      label: 'Contato',
    },
  ]

  return (
    <footer id='contact' className='w-full bg-background border-t'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-7 py-10 px-5'>
        <div className='space-y-2'>
          <a
            href='#'
            className='w-fit text-amber-500 flex items-center gap-1 text-xl md:text-xl'
          >
            <span>
              <Scissors />
            </span>
            BARBEARIA
          </a>

          <p className='md:text-sm text-zinc-500'>
            Transformando o seu estilo com elegância e profissionalismo desde
            2023.
          </p>
        </div>

        <div className='space-y-2'>
          <p className='text-lg'>Serviços</p>
          <ul className='grid gap-2'>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className='md:text-sm text-zinc-500 hover:text-amber-500 w-fit'
              >
                {link.label}
              </a>
            ))}
          </ul>
        </div>

        <div className='space-y-2'>
          <p className='text-lg'>Contato</p>
          <ul className='grid gap-2'>
            <p className='md:text-sm text-zinc-500'>
              Rua da Barbearia, 123 Centro, Cidade, UF
            </p>
            <p className='md:text-sm text-zinc-500'>(11) 9999-9999</p>
            <p className='md:text-sm text-zinc-500 w-fit'>
              contato@barbearia.com
            </p>
          </ul>
        </div>
      </div>

      <div className='text-center text-zinc-500 text-sm py-7 border-t'>
        © 2026 Barbearia Estilo. Todos os direitos reservados.
      </div>
    </footer>
  )
}
