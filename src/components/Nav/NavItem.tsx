import { ReactNode } from 'react'
import { S } from './styles'

type NavItemProps = {
  children: ReactNode
  to: string
}

const NavItem = (props: NavItemProps) => {
  return <S.LinkElem to={props.to}>{props.children}</S.LinkElem>
}

export { NavItem }
