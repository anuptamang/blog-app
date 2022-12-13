import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SinglePost from '../../components/Post/SinglePost'
import Loading from '../../components/UI/Loading'
import { PostContext } from '../../context/app/post'
import { getPostComments, getPostsById } from '../../context/app/post/action'
import { UserContext } from '../../context/app/user'
import { getUserById } from '../../context/app/user/action'
import { LikesProps } from '../../types'

const PostDetail = () => {
  const { id } = useParams()
  const { state: post, dispatch: postDispatch } = useContext(PostContext)
  const { state: author, dispatch: userDispatch } = useContext(UserContext)
  const [likes, setLikes] = useState<LikesProps>()
  const [postComments, setPostComments] = useState<any>({
    comments: [],
    total: 0,
  })

  const auth = true

  const handleCommentSubmit = (id: string | number, comment: any) => {
    // e.preventDefault()
    console.log(id, comment, '- commentOnPost')
  }

  const handleReplySubmit = (id: string | number, comment: any) => {
    // e.preventDefault()
    console.log(id, comment, '- replyOnComment')
  }

  useEffect(() => {
    getPostsById(postDispatch, id)
  }, [postDispatch, id])

  useEffect(() => {
    if (post?.data?.reactions) setLikes(post.data.reactions)
  }, [post.data.reactions])

  useEffect(() => {
    if (post?.postComments)
      setPostComments({
        ...postComments,
        comments: post?.postComments.comments,
        total: post?.postComments.total,
      })
  }, [post?.postComments])

  useEffect(() => {
    post?.data?.userId && getUserById(userDispatch, post?.data?.userId)
  }, [id, userDispatch, post?.data?.userId])

  useEffect(() => {
    getPostComments(postDispatch, id)
  }, [id, postDispatch])

  return (
    <>
      {post.loading || author.loading ? (
        <Loading />
      ) : (
        <SinglePost
          data={post.data}
          author={author}
          likes={likes}
          setLikes={setLikes}
          comments={postComments}
          setPostComments={setPostComments}
          handleCommentSubmit={handleCommentSubmit}
          handleReplySubmit={handleReplySubmit}
          auth={auth}
        />
      )}
    </>
  )
}

export default PostDetail
