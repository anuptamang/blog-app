import { useState } from 'react'
import { useTheme } from 'styled-components'
import { Heading } from '../Heading/Heading'
import CommentBox from './CommentBox'
import { S } from './styles'

const SingleComment = ({ comment, handleSubmit }: any) => {
  const theme = useTheme()
  const [showReplyBox, setShowReplyBox] = useState(false)
  const [showChildReplyBox, setShowChildReplyBox] = useState(false)
  const [replyComments, setReplyComments] = useState<any>({
    comments: [],
    total: 0,
  })

  const handleReply = () => {
    setShowReplyBox((prev) => !prev)
    if (!showChildReplyBox) setShowChildReplyBox(true)
  }

  // console.log(replyComments)

  return (
    <S.PrimaryComment>
      <S.Avatar>{comment?.user?.username?.slice(0, 2)}</S.Avatar>
      <S.CommentsBox>
        <S.CommentDetail>
          <Heading level={4} size={18} color={theme.colors.text}>
            {comment?.user?.username}
          </Heading>
          <S.Text>{comment?.body}</S.Text>
        </S.CommentDetail>
        <S.CommentPane>
          <S.List type='inline'>
            <li>
              <S.Link onClick={handleReply}>Reply</S.Link>
            </li>
            <li>
              <S.Link>React</S.Link>
            </li>
            <li>47 min ago</li>
          </S.List>
          {replyComments.total > 0 &&
            replyComments.comments.map((reply: any) => (
              <S.CommentsBox key={reply.id}>
                <S.CommentDetail>
                  <Heading level={5} size={16} color={theme.colors.text}>
                    {'reply user'}
                  </Heading>
                  <S.Text>{'reply body'}</S.Text>
                </S.CommentDetail>
                <S.CommentPane>
                  <S.List type='inline'>
                    <li>
                      <S.Link onClick={handleReply}>Reply</S.Link>
                    </li>
                    <li>
                      <S.Link>React</S.Link>
                    </li>
                    <li>47 min ago</li>
                  </S.List>
                  {showChildReplyBox && (
                    <CommentBox
                      auth={true}
                      setReplyComments={setReplyComments}
                      handleSubmit={handleSubmit}
                      setShowChildReplyBox={setShowChildReplyBox}
                      id={reply.id}
                      isReply={true}
                    />
                  )}
                </S.CommentPane>
              </S.CommentsBox>
            ))}
          {showReplyBox && (
            <CommentBox
              auth={true}
              handleSubmit={handleSubmit}
              setReplyComments={setReplyComments}
              id={comment.id}
              isReply={true}
            />
          )}
        </S.CommentPane>
      </S.CommentsBox>
    </S.PrimaryComment>
  )
}

export default SingleComment
