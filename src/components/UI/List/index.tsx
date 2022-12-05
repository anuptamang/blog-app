import { ReactNode } from 'react'
import { S } from './styles'

type ListProps = {
  children?: ReactNode
  alignItems?: 'center' | 'end'
  justifyContent?: 'center' | 'between' | 'end'
  type?: 'inline'
}

const List = (props: ListProps) => {
  return <S.List {...props}>{props.children}</S.List>
}

export default List
