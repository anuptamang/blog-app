import { useContext, useEffect, useState } from 'react'
import PostFeaturedBlock from '../../components/Post/PostFeaturedBlock'
import PostPanelBlock from '../../components/Post/PostPanelBlock'
import PostsBlock from '../../components/Post/PostsBlock'
import Loading from '../../components/UI/Loading'
import PostContainer from '../../components/UI/PostContainer'
import { PostContext } from '../../context/app/post'
import {
  getAllPost,
  getPostsByCategory,
  getPostsBySearch,
  getPostsByTags,
} from '../../context/app/post/action'
import { CATEGORIES, TAGS } from '../../data/static'
import useDebounce from '../../hooks/useDebounce'
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

  const searchQuery = useDebounce(values.search, 1000)

  const handleChange = (e: HandleChangeProps) => {
    getHandleChange(e, values, setValues)
    setValues({ ...values, [e.target.name]: e.target.value })
    if (e.target.name.toUpperCase() === 'CATEGORIES') {
      const category = e.target.value
      getPostsByCategory(dispatch, category)
    }
    if (e.target.name.toUpperCase() === 'TAGS') {
      const tag = e.target.value
      getPostsByTags(dispatch, tag)
    }
  }

  useEffect(() => {
    getAllPost(dispatch)
  }, [dispatch])

  useEffect(() => {
    if (searchQuery) getPostsBySearch(dispatch, searchQuery)
  }, [dispatch, searchQuery])

  return (
    <PostContainer>
      <PostPanelBlock
        handleChange={handleChange}
        categories={CATEGORIES}
        tags={TAGS}
        values={values}
      />
      {loading ? (
        <Loading />
      ) : (
        <>
          {!data?.posts?.length ? (
            'No Posts Found!'
          ) : (
            <>
              <PostFeaturedBlock data={data.posts[0]} />
              <PostsBlock posts={data} />
            </>
          )}
        </>
      )}
    </PostContainer>
  )
}

export default PostSection
