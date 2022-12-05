import { useState } from 'react'
import PostFeaturedBlock from '../../components/Post/PostFeaturedBlock'
import PostPanelBlock from '../../components/Post/PostPanelBlock'
import PostsBlock from '../../components/Post/PostsBlock'

import PostContainer from '../../components/UI/PostContainer'
import { CATEGORIES, POSTS, TAGS } from '../../data/static'
import { eProps } from '../../types/general'
import { getHandleChange } from '../../utils/getHandleChange'

type Props = {
  categories: string
  tags: string
}

const PostSection = () => {
  const [values, setValues] = useState<Props>({
    categories: '',
    tags: '',
  })

  const handleChange = (e: eProps) => {
    getHandleChange(e, values, setValues)
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <PostContainer>
      <PostPanelBlock
        handleChange={handleChange}
        categories={CATEGORIES}
        tags={TAGS}
        values={values}
      />
      <PostFeaturedBlock data={POSTS.data[0]} />
      <PostsBlock posts={POSTS} />
    </PostContainer>
  )
}

export default PostSection
