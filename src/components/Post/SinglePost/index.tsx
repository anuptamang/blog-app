import { useTheme } from 'styled-components'
import { PostDataProps } from '../../../types'
import Comments from '../../UI/Comments'
import { Container } from '../../UI/Grid'
import { Heading } from '../../UI/Heading/Heading'
import { Icon } from '../../UI/Icon'
import Banner from './Banner'
import { S } from './styles'

const SinglePost = ({ data, author, comments }: PostDataProps) => {
  const theme = useTheme()

  return (
    <S.SinglePage>
      <Banner data={data} />
      <S.PostHolder>
        <Container>
          <S.PostDetail>
            <p>{data.body}</p>
          </S.PostDetail>
          <S.PostAuthor>
            <Heading level={3} fontSize={18} color={theme.colors.text}>
              {author?.data?.firstName} {author?.data?.lastName}
            </Heading>
            <p>
              <span>{author?.data?.company?.title}</span> ,{' '}
              <span>{author?.data?.company?.name}</span>
            </p>
            <p>
              <span>{author?.data?.company?.department}</span>
            </p>
          </S.PostAuthor>
          <S.ReactionPanel>
            <S.List type='inline'>
              <li>
                <S.Icon>
                  <Icon icon='thumbs-up' size={24} />
                </S.Icon>
                {data?.reactions}
              </li>
              <li>
                <S.Icon>
                  <Icon icon='chat, comment, bubble, talk' size={18} />
                </S.Icon>
                {comments?.total}
              </li>
            </S.List>
          </S.ReactionPanel>
          <Comments data={comments} />
        </Container>
      </S.PostHolder>
    </S.SinglePage>
  )
}

export default SinglePost
