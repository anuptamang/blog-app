import { CommentsDataProps } from '../../../types'
import SingleComment from './SingleComment'
import { S } from './styles'

interface Iprops {
  data?: CommentsDataProps
  handleSubmit?: any
}

const Comments = ({ data, handleSubmit }: Iprops) => {
  // const [isCompleted, setIsCompleted] = useState(false)
  // const [index, setIndex] = useState(1)
  // const initialComments = data?.comments?.slice(0, index)

  // const loadMore = () => {
  //   let commentsLength: number | undefined | any =
  //     data?.comments && data.comments.length

  //   setIndex(index + 1)

  //   if (index >= commentsLength) {
  //     setIsCompleted(true)
  //   } else {
  //     setIsCompleted(false)
  //   }
  // }

  // useEffect(() => {
  //   if (data?.total) {
  //     data?.total > 1 ? setIsCompleted(false) : setIsCompleted(true)
  //   }
  // }, [data?.total])

  return (
    <S.Comments>
      {data?.comments?.map((comment) => (
        <SingleComment
          key={comment?.id}
          comment={comment}
          handleSubmit={handleSubmit}
        />
      ))}
      {/* {!isCompleted && (
        <>
          {data?.total && data.total - index > 0 && (
            <S.More onClick={loadMore}>
              Show {data?.total && data.total - index} more replies
            </S.More>
          )}
        </>
      )} */}
    </S.Comments>
  )
}

export default Comments
