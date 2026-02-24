import { redirect } from 'next/navigation'

export default async function NotFound() {
  await new Promise((resolve) => setTimeout(resolve, 1500))

  redirect('/')
}