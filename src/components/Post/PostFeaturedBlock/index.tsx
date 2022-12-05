import { PostDataProps } from '../../../types/general'
import Article from '../Article'
import { S } from './styles'

const PostFeaturedBlock = ({ data }: PostDataProps) => {
  const limitText = 550
  const layoutType = 'HORIZONTAL'
  return (
    <S.PostFeatured>
      <Article data={{ ...data, limitText, layoutType }} />
    </S.PostFeatured>
  )
}

export default PostFeaturedBlock
