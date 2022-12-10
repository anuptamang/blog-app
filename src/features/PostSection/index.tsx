import { useContext, useEffect, useState } from 'react'
import PostFeaturedBlock from '../../components/Post/PostFeaturedBlock'
import PostPanelBlock from '../../components/Post/PostPanelBlock'
import PostsBlock from '../../components/Post/PostsBlock'
import Loading from '../../components/UI/Loading'
import PostContainer from '../../components/UI/PostContainer'
import { PostContext } from '../../context/app/post'
import { getAllPost } from '../../context/app/post/action'
import { CATEGORIES, TAGS } from '../../data/static'
import { HandleChangeProps } from '../../types/general'
import { getHandleChange } from '../../utils/getHandleChange'

type Props = {
  categories: string
  tags: string
  search: string
}

const PostSection = () => {
  const { state, dispatch } = useContext(PostContext)
  const { loading, data } = state

  const [values, setValues] = useState<Props>({
    categories: '',
    tags: '',
    search: '',
  })

  const handleChange = (e: HandleChangeProps) => {
    getHandleChange(e, values, setValues)
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    getAllPost(dispatch)
  }, [dispatch])

  return (
    <PostContainer>
      <PostPanelBlock
        handleChange={handleChange}
        categories={CATEGORIES}
        tags={TAGS}
        values={values}
      />
      {loading || !data?.posts?.length ? (
        <Loading />
      ) : (
        <>
          <PostFeaturedBlock data={data.posts[0]} />
          <PostsBlock posts={data} />
        </>
      )}
    </PostContainer>
  )
}

export default PostSection
