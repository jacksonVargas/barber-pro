interface TitleProps {
  title: string
  description: string
}

export function Title({ title, description }: TitleProps) {
  return (
    <div className='max-w-2xl mx-auto text-center mb-10'>
      <h3 className='text-2xl text-amber-500 mb-2'>{title}</h3>
      <p className='text-zinc-500'>{description}</p>
    </div>
  )
}