import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { CommentsDataProps } from '../../../types'
import { Heading } from '../Heading/Heading'
import List from '../List'
import { S } from './styles'

interface Iprops {
  data?: CommentsDataProps
}

const Comments = ({ data }: Iprops) => {
  const theme = useTheme()
  const [isCompleted, setIsCompleted] = useState(false)
  const [index, setIndex] = useState(1)
  const initialComments = data?.comments?.slice(0, index)

  const loadMore = () => {
    let commentsLength: number | undefined | any =
      data?.comments && data.comments.length

    setIndex(index + 1)

    if (index >= commentsLength) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }

  useEffect(() => {
    if (data?.total) {
      data?.total > 1 ? setIsCompleted(false) : setIsCompleted(true)
    }
  }, [data?.total])

  return (
    <S.Comments>
      {initialComments?.map((comment) => (
        <S.PrimaryComment key={comment?.id}>
          <S.Avatar>{comment?.user?.username?.slice(0, 2)}</S.Avatar>
          <S.CommentsBox>
            <S.CommentDetail>
              <Heading level={4} size={18} color={theme.colors.text}>
                {comment?.user?.username}
              </Heading>
              <S.Text>{comment?.body}</S.Text>
            </S.CommentDetail>
            <S.CommentPane>
              <List type='inline'>
                <li>Reply</li>
                <li>React</li>
                <li>47 min ago</li>
              </List>
            </S.CommentPane>
          </S.CommentsBox>
        </S.PrimaryComment>
      ))}
      {!isCompleted && (
        <>
          {data?.total && data.total - index > 0 && (
            <S.More onClick={loadMore}>
              Show {data?.total && data.total - index} more replies
            </S.More>
          )}
        </>
      )}
    </S.Comments>
  )
}

export default Comments
