'use client'

// Hooks
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { MenuProps } from '@/types/menu'
import { authClient } from '@/lib/auth-client'

// Icones
import { Scissors, Menu, X, Loader2 } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { data: session, isPending } = authClient.useSession()

  // Função para fechar o menu
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => removeEventListener('mousedown', handleClick)
  }, [isOpen])

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
    <>
      <header className='w-full bg-background fixed z-99 top-0 border-b'>
        <nav className='max-w-6xl mx-auto flex justify-between items-center py-3 md:py-2 px-5'>
          {/* Logo */}
          <a
            href='#'
            className='text-amber-500 flex items-center gap-1 text-xl md:text-xl'
          >
            <span>
              <Scissors />
            </span>
            BARBEARIA
          </a>

          <div className='md:hidden flex items-center gap-5'>
            {isPending ? (
              <div className='py-2 px-3 font-semibold bg-amber-500 text-black rounded flex justify-center items-center'>
                <Loader2 size={16} className='animate-spin' />
              </div>
            ) : session ? (
              <Link
                href='/profile'
                className='transition-all duration-300 hover:scale-103 text-xs font-semibold py-2 px-3 bg-amber-500 text-black rounded flex justify-center items-center'
              >
                Perfil
              </Link>
            ) : (
              <Link
                href='/login'
                className='transition-all duration-300 hover:scale-103 text-xs font-semibold py-2 px-3 bg-amber-500 text-black rounded flex justify-center items-center'
              >
                Login
              </Link>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className='cursor-pointer text-amber-500'
            >
              {isOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </div>

          {/* Desktop */}
          <ul className='hidden md:flex items-center gap-7'>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className='md:text-sm hover:text-amber-500'
              >
                {link.label}
              </a>
            ))}

            <div className='flex items-center gap-3'>
              {isPending ? (
                <div className='py-2 px-3 bg-amber-500 text-black rounded'>
                  <Loader2 size={20} className='animate-spin' />
                </div>
              ) : session ? (
                <Link
                  href='/profile'
                  className='transition-all duration-300 hover:scale-103 md:text-sm font-semibold py-2 px-3 bg-amber-500 text-black rounded flex justify-center items-center gap-2'
                >
                  Perfil
                </Link>
              ) : (
                <Link
                  href='/login'
                  className='transition-all duration-300 hover:scale-103 md:text-sm font-semibold py-2 px-3 bg-amber-500 text-black rounded flex justify-center items-center gap-2'
                >
                  Login
                </Link>
              )}

              <a
                href='#'
                className='transition-all duration-300 hover:scale-103 md:text-sm font-semibold py-2 px-3 bg-amber-500 text-black rounded flex items-center gap-2'
              >
                Agendar
              </a>
            </div>
          </ul>
        </nav>
      </header>

      {/* Mobile */}
      {isOpen && (
        <div
          ref={menuRef}
          className='md:hidden w-full h-screen max-w-70 fixed z-99 top-0 left-0 bg-background'
        >
          <ul className='grid gap-2 py-3 px-5'>
            {links.map((link) => (
              <a
                key={link.label}
                onClick={() => setIsOpen(false)}
                href={link.href}
                className='md:text-sm hover:text-amber-500 py-3 px-3 border rounded'
              >
                {link.label}
              </a>
            ))}

            <div className='grid gap-2'>
              <a
                href='#'
                className='transition-all duration-300 hover:scale-103 md:text-sm font-semibold py-2 px-3 bg-amber-500 text-black rounded flex justify-center items-center gap-2'
              >
                Login
              </a>

              <a
                href='#'
                className='transition-all duration-300 hover:scale-103 md:text-sm font-semibold py-2 px-3 bg-amber-500 text-black rounded flex justify-center items-center gap-2'
              >
                Agendar
              </a>
            </div>
          </ul>
        </div>
      )}
    </>
  )
}
