import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button'
import { S } from './styles'
import { v4 as uuidv4 } from 'uuid'

interface Iprops {
  auth: boolean
  handleSubmit: any
  isReply?: boolean
  postId?: string | number
  id?: string | number
  setPostComments?: any
  setReplyComments?: any
  setShowChildReplyBox?: any
}

interface CommentProps {
  comments: []
  total: number
}

const CommentBox = ({
  auth,
  handleSubmit,
  isReply,
  id,
  setPostComments,
  setReplyComments,
  setShowChildReplyBox,
}: Iprops) => {
  const [comment, setComment] = useState<any>()

  const handleOnSubmit = (e: any) => {
    e.preventDefault()
    handleSubmit(id, comment)
    setPostComments &&
      setPostComments((prev: CommentProps) => ({
        ...prev,
        comments: [
          ...prev.comments,
          {
            body: comment,
            id: uuidv4(),
            postId: id,
            user: {
              id: 3,
              username: 'Jon Doe',
            },
          },
        ],
        total: prev.total + 1,
      }))
    setReplyComments &&
      setReplyComments((prev: CommentProps) => ({
        ...prev,
        comments: [
          ...prev.comments,
          {
            body: comment,
            id: uuidv4(),
            postId: id,
            user: {
              id: 3,
              username: 'Alex Jon',
            },
          },
        ],
        total: prev.total + 1,
      }))
    setShowChildReplyBox && setShowChildReplyBox(false)
    setComment('')
  }

  return (
    <S.CommentBox onSubmit={handleOnSubmit}>
      <S.Textarea
        value={comment}
        onChange={(e: any) => setComment(e.target.value)}
        placeholder='Write a comment...'
      ></S.Textarea>
      <S.BtnHolder>
        {auth ? (
          <Button variant='primary' type='submit' value='Submit'>
            {isReply ? 'Reply on comment' : 'Comment on post'}
          </Button>
        ) : (
          <Link to='/login'>
            <Button variant='primary'>
              {isReply ? 'Login to reply' : 'Login to comment'}
            </Button>
          </Link>
        )}
      </S.BtnHolder>
    </S.CommentBox>
  )
}

export default CommentBox
