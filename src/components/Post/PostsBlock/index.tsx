import { useState } from 'react'
import { PostsProps } from '../../../types/general'
import { Button } from '../../UI/Button'
import Article from '../Article'
import { S } from './styles'

const PostsBlock = ({ posts: { data, limit, total } }: PostsProps) => {
  const limitText = 100
  const [isCompleted, setIsCompleted] = useState(false)
  const [index, setIndex] = useState(limit)
  const initialPosts = data.slice(0, index)

  const loadMore = () => {
    setIndex(index + 3)

    if (index >= data.length) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }

  return (
    <S.PostHolder>
      <S.Row>
        {initialPosts?.map((post) => (
          <S.Col key={post.id}>
            <Article data={{ ...post, limitText }} />
          </S.Col>
        ))}
      </S.Row>
      <S.LoadMore>
        {!isCompleted && (
          <Button onClick={loadMore} variant='primary'>
            Load more
          </Button>
        )}
      </S.LoadMore>
    </S.PostHolder>
  )
}

export default PostsBlock
