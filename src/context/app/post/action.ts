import API from "../../../services/api"
import { Types } from "./types"

export const getAllPost = async (dispatch: any) => {
  dispatch({ type: Types.GetPosts })

  try {
    const response = await API.get('/posts')
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
