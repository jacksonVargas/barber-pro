import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const loginSchema = z.object({
  email: z.email('Digite um email válido').max(32, 'Máximo 32 caracteres'),
  password: z
    .string()
    .nonempty('Senha é obrigatória')
    .min(8, 'Senha deve ter no pelo menos 8 caracteres')
    .max(32, 'Máximo 32 caracteres'),
})

export type LoginSchema = z.infer<typeof loginSchema>

export function useLoginSchema() {
  return useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  })
}