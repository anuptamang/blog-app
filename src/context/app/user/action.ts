import { getUserByIdApi } from "../../../services/api/users"
import { IDispatch } from "../../../types"
import { Types } from "./types"

export const getUserById = async (dispatch: ((arg: IDispatch) => void), id: string | number | undefined) => {
  dispatch({ type: Types.GetUserById })

  try {
    const response = await getUserByIdApi(id)
    dispatch({
      type: Types.GetUserByIdSuccess,
      payload: response.data
    })

  } catch (error) {
    dispatch({
      type: Types.GetUserByIdFailed,
      payload: error
    })
  }
}
