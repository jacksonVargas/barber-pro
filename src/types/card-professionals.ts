import { StaticImageData } from 'next/image'

export interface CardProfessionalsProps {
  id: number
  image: StaticImageData
  name: string
  info: string
  linkFacebook: string
  linkInstagram: string
}
