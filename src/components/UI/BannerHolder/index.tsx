import React from 'react'
import { ChildrenProps } from '../../../types'
import { Container } from '../Grid'
import { S } from './styles'

const BannerHolder = ({ children }: ChildrenProps) => {
  return (
    <S.BannerHolder>
      <Container>{children}</Container>
    </S.BannerHolder>
  )
}

export default BannerHolder
