import { useEffect, useState } from 'react'
import { PostProps, PostsProps } from '../../../types/general'
import { Button } from '../../UI/Button'
import Article from '../Article'
import { S } from './styles'

const PostsBlock = ({ posts }: PostsProps) => {
  const limitText = 100
  const [isCompleted, setIsCompleted] = useState(false)
  const [index, setIndex] = useState(9)
  const initialPosts = posts.posts.slice(0, index)

  const loadMore = () => {
    setIndex(index + 3)

    if (index >= posts.posts.length) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }

  useEffect(() => {
    posts.total > 8 ? setIsCompleted(false) : setIsCompleted(true)
  }, [posts.total])

  return (
    <S.PostHolder>
      <S.Row>
        {initialPosts?.map((post: PostProps) => (
          <S.Col key={post.id}>
            <Article data={{ ...post, limitText }} />
          </S.Col>
        ))}
      </S.Row>
      {!isCompleted && (
        <S.LoadMore>
          <Button onClick={loadMore} variant='primary'>
            Load more
          </Button>
        </S.LoadMore>
      )}
    </S.PostHolder>
  )
}

export default PostsBlock
