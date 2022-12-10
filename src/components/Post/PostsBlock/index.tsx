import { PostProps, PostsProps } from '../../../types/general'
import Article from '../Article'
import { S } from './styles'

const PostsBlock = ({ posts }: PostsProps) => {
  const limitText = 100

  return (
    <S.PostHolder>
      <S.Row>
        {posts.posts?.map((post: PostProps) => (
          <S.Col key={post.id}>
            <Article data={{ ...post, limitText }} />
          </S.Col>
        ))}
      </S.Row>
      {/* <S.LoadMore>
        {!isCompleted && (
          <Button onClick={loadMore} variant='primary'>
            Load more
          </Button>
        )}
      </S.LoadMore> */}
    </S.PostHolder>
  )
}

export default PostsBlock
