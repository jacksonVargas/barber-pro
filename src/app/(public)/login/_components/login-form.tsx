'use client'

// Hooks
import { useState } from 'react'
import Link from 'next/link'
import { useLoginSchema, LoginSchema } from './login-schema'
import { authClient } from '@/lib/auth-client'
import { redirect } from 'next/navigation'
import { toast } from 'sonner'

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

export function LoginForm() {
  const form = useLoginSchema()
  const [loading, setLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  async function handleLogin(data: LoginSchema) {
    await authClient.signIn.email({
      email: data.email,
      password: data.password
    }, {
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
          case 'INVALID_EMAIL_OR_PASSWORD':
            toast.error('Email ou senha inválidos')
          break
        }

        setLoading(false)
      } 
    })
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

          <CardDescription>Faça seu Login</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              className='space-y-5'
              onSubmit={form.handleSubmit(handleLogin)}
            >
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
                {loading ? 'Entrando...' : 'Entrar'}
              </Button>

              <span className='text-sm text-zinc-500'>
                Não possui uma conta?{' '}
                <Link
                  href='/register'
                  className='text-amber-500 hover:underline'
                >
                  Criar conta
                </Link>
              </span>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  )
}
