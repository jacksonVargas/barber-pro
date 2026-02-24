import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const registerSchema = z.object({
  name: z.string().nonempty('Nome é obrigatório').max(40, 'Máximo 40 caracteres'),
  email: z.email('Digite um email válido').max(32, 'Máximo 32 caracteres'),
  password: z.string().nonempty('Senha é obrigatória').min(8, 'Senha deve ter no pelo menos 8 caracteres').max(32, 'Máximo 32 caracteres')
})

export type RegisterSchema = z.infer<typeof registerSchema>

export function useRegisterSchema() {
  return useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
    mode: 'onChange'
  })
}