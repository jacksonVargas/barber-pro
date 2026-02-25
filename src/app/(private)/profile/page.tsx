// Hooks
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'

// Icones
import { ArrowLeft, LogOut, Calendar } from 'lucide-react'

// Componentes
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default async function Profile() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if(!session) {
    redirect('/login')
  }

  console.log(session)

  async function logout() {
    'use server'

    await auth.api.signOut({
      headers: await headers()
    })

    redirect('/login')
  }

  return (
    <main className='w-full max-w-150 mx-auto py-10 px-5'>
      <Link
        href='/'
        className='flex items-center gap-2 text-zinc-500 hover:text-amber-500 mb-5'
      >
        <ArrowLeft size={20} />
        Voltar
      </Link>

      <Card className='mb-7'>
        <CardContent>
          <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
            <div className='flex items-center gap-4 mb-5 md:mb-0'>
              <div className='flex justify-center items-center w-15 h-15 rounded-full bg-transparent border-2 border-amber-500'>
                <p className='text-amber-500 text-3xl'>
                  {session.user.name?.trim()[0]?.toUpperCase() ??
                    session.user.email?.trim()[0]?.toUpperCase()}
                </p>
              </div>

              <div>
                <h3 className='font-semibold'>{session.user.name}</h3>
                <p className='text-zinc-500 text-sm'>{session.user.email}</p>
              </div>
            </div>

            <form action={logout}>
              <button
                type='submit'
                className='flex items-center gap-2 text-sm py-1 px-5 rounded-lg bg-black hover:bg-none hover:text-white border border-red-500 text-red-500'
              >
                <LogOut size={15} />
                Sair
              </button>
            </form>
          </div>
        </CardContent>
      </Card>

      <h3 className='flex items-center gap-2 text-amber-500 mb-2'>
        <Calendar size={18} />
        Meus Agendamentos
      </h3>

      <Card>
        <CardContent className='text-center'>
          <p className='text-zinc-500 text-sm'>Você ainda não possui agendamentos.</p>
        </CardContent>
      </Card>
    </main>
  )
}
