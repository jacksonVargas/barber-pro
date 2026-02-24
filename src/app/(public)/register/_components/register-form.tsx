'use client'

// Hooks
import { useState } from 'react'
import Link from 'next/link'
import { useRegisterSchema, RegisterSchema } from './register-schema'
import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'
import { redirect } from 'next/navigation'

// Componentes
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

// Icones
import { Scissors, Eye, EyeOff } from 'lucide-react'

export function RegisterForm() {
  const form = useRegisterSchema()
  const [loading, setLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  async function handleRegister(data: RegisterSchema) {
    await authClient.signUp.email(
      {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      {
        onRequest(ctx) {
          setLoading(true)
        },
        onSuccess(ctx) {
          setLoading(false)
          redirect('/')
        },
        onError(ctx) {
          const code = ctx.error.code

          switch (code) {
            case 'USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL':
              toast.error('Email já está em uso')
            break
          }

          setLoading(false)
        },
      }
    )
  }

  return (
    <main className='w-full min-h-screen grid place-items-center p-5'>
      <Card className='w-full max-w-100 mx-auto'>
        <CardHeader className='w-full flex flex-col items-center'>
          <CardTitle>
            <Link
              href='/'
              className='w-fit text-amber-500 flex items-center gap-1 text-xl md:text-xl'
            >
              <span>
                <Scissors />
              </span>
              BARBEARIA
            </Link>
          </CardTitle>

          <CardDescription>Faça seu Cadastro</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              className='space-y-5'
              onSubmit={form.handleSubmit(handleRegister)}
            >
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seu nome</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder='Digite seu nome' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seu Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder='Digite seu email' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sua senha</FormLabel>
                    <FormControl>
                      <div className='flex items-center relative'>
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          {...field}
                          placeholder='Digite sua senha'
                        />

                        <button
                          type='button'
                          onClick={() => setShowPassword(!showPassword)}
                          className='absolute right-3 text-zinc-500'
                        >
                          {showPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                disabled={loading}
                className='w-full bg-amber-500 hover:bg-amber-600 text-black'
              >
                {loading ? 'Criando Conta...' : 'Cadastrar'}
              </Button>

              <span className='text-sm text-zinc-500'>
                Já possui uma conta?{' '}
                <Link href='/login' className='text-amber-500 hover:underline'>
                  Entrar
                </Link>
              </span>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  )
}
