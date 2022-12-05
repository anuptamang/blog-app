import { ChildrenProps } from '../../../types/general'
import { Container } from '../Grid'
import { S } from './styles'

const PostContainer = ({children}: ChildrenProps) => {
  return (
    <S.PostContainer>
      <Container>{children}</Container>
    </S.PostContainer>
  )
}

export default PostContainer