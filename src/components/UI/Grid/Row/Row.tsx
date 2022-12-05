import { ReactNode } from 'react'
import { S } from './styles'

type RowProps = {
  alignItems?: 'center' | 'end'
  justifyContent?: 'center' | 'between' | 'end'
  children: ReactNode
}

const Row = (props: RowProps) => {
  return <S.Row {...props}>{props.children}</S.Row>
}

export { Row }
