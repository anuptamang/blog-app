import { useRef, useState } from 'react'
import { useTheme } from 'styled-components'
import { PostDataProps } from '../../../types'
import Comments from '../../UI/Comments'
import CommentBox from '../../UI/Comments/CommentBox'
import { Container } from '../../UI/Grid'
import { Heading } from '../../UI/Heading/Heading'
import { Icon } from '../../UI/Icon'
import Banner from './Banner'
import { S } from './styles'

const SinglePost = ({
  data,
  author,
  comments,
  likes,
  setLikes,
  handleCommentSubmit,
  handleReplySubmit,
  auth,
  setPostComments,
}: PostDataProps) => {
  const theme = useTheme()
  const likesRef = useRef<any>(null)
  const [count, setCount] = useState(0)
  const [showComments, setShowComments] = useState(true)

  const handleLikes = () => {
    if (count < 1) {
      setLikes((prev: number) => prev + 1)
      setCount(count + 1)
      likesRef?.current.classList.add('liked')
    } else {
      setLikes((prev: number) => prev - 1)
      setCount(count - 1)
      likesRef?.current.classList.remove('liked')
    }
  }

  const handleComments = () => {
    setShowComments((prev) => !prev)
  }

  // console.log(data.id);

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
                <S.Icon primary onClick={handleLikes} ref={likesRef}>
                  <Icon icon='thumbs-up' size={24} />
                </S.Icon>
                {likes && likes}
              </li>
              <li>
                <S.Icon onClick={handleComments}>
                  <Icon icon='chat, comment, bubble, talk' size={18} />
                </S.Icon>
                {comments?.total}
              </li>
            </S.List>
          </S.ReactionPanel>
          {showComments && (
            <Comments handleSubmit={handleReplySubmit} data={comments} />
          )}
          <CommentBox
            handleSubmit={handleCommentSubmit}
            id={data.id}
            auth={auth}
            setPostComments={setPostComments}
          />
        </Container>
      </S.PostHolder>
    </S.SinglePage>
  )
}

export default SinglePost
