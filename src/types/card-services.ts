import { StaticImageData } from 'next/image'

export interface CardServicesProps {
  image: StaticImageData
  title: string
  info: string
  price: string
}
