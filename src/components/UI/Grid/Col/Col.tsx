import { ReactNode } from 'react'
import { S } from './styles'

type ColProps = {
  sm?: number
  md?: number
  lg?: number
  children: ReactNode
}

const Col = (props: ColProps) => {
  return <S.Col {...props}>{props.children}</S.Col>
}

export { Col }
