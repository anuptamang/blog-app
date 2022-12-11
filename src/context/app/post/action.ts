import { getAllPostApi, getPostByIdApi, getPostCommentsApi, searchAllPostApi } from "../../../services/api/posts"
import { IDispatch, PostProps } from "../../../types"
import { Types } from "./types"



export const getAllPost = async (dispatch: ((arg: IDispatch) => void)) => {
  dispatch({ type: Types.GetPosts })

  try {
    const response = await getAllPostApi()
    dispatch({
      type: Types.GetPostsSuccess,
      payload: response.data
    })
  } catch (error) {
    dispatch({
      type: Types.GetPostsFailed,
      payload: error
    })
  }
}

export const getPostsByCategory = async (dispatch: ((arg: IDispatch) => void), category: string) => {
  dispatch({ type: Types.GetPostsByCategory })

  try {
    const response = await getAllPostApi()
    const posts = response.data.posts
    const result = category === 'categories' ? posts : posts.filter((post: PostProps) => post.tags.includes(category))

    dispatch({
      type: Types.GetPostsByCategorySuccess,
      payload: result
    })
  } catch (error) {
    dispatch({
      type: Types.GetPostsByCategoryFailed,
      payload: error
    })
  }
}

export const getPostsByTags = async (dispatch: ((arg: IDispatch) => void), tag: string) => {
  dispatch({ type: Types.GetPostsByTags })

  try {
    if (tag === 'tags') {

      const response = await getAllPostApi()
      dispatch({
        type: Types.GetPostsByTagsSuccess,
        payload: response.data
      })
    } else {

      const response = await searchAllPostApi(tag)
      dispatch({
        type: Types.GetPostsByTagsSuccess,
        payload: response.data
      })
    }


  } catch (error) {
    dispatch({
      type: Types.GetPostsByTagsFailed,
      payload: error
    })
  }
}

export const getPostsBySearch = async (dispatch: ((arg: IDispatch) => void), query: string) => {
  dispatch({ type: Types.GetPostsByTags })


  try {
    const response = await searchAllPostApi(query)
    dispatch({
      type: Types.GetPostsByTagsSuccess,
      payload: response.data
    })

  } catch (error) {
    dispatch({
      type: Types.GetPostsByTagsFailed,
      payload: error
    })
  }
}

export const getPostsById = async (dispatch: ((arg: IDispatch) => void), id: string | number | undefined) => {
  dispatch({ type: Types.GetPostsById })


  try {
    const response = await getPostByIdApi(id)
    dispatch({
      type: Types.GetPostsByIdSuccess,
      payload: response.data
    })

  } catch (error) {
    dispatch({
      type: Types.GetPostsByIdFailed,
      payload: error
    })
  }
}

export const getPostComments = async (dispatch: ((arg: IDispatch) => void), postId: string | number | undefined) => {
  dispatch({ type: Types.GetPostsComments })


  try {
    const response = await getPostCommentsApi(postId)
    dispatch({
      type: Types.GetPostsCommentsSuccess,
      payload: response.data
    })

  } catch (error) {
    dispatch({
      type: Types.GetPostsCommentsFailed,
      payload: error
    })
  }
}
