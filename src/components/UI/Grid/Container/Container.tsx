import { ChildrenProps } from '../../../../types/general'
import { S } from './styles'

const Container = (props: ChildrenProps) => {
  return <S.Container>{props.children}</S.Container>
}

export { Container }
