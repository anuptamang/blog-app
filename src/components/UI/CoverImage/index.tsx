import React from 'react'
import { S } from './styles'

interface Iprops {
  imageUrl: string
  imageAlt: string
}

const CoverImage = ({ imageUrl, imageAlt }: Iprops) => {
  return (
    <S.ImageHolder>
      <S.Image src={imageUrl} alt={imageAlt} />
    </S.ImageHolder>
  )
}

export default CoverImage
