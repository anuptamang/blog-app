
import { InitialUserStateProps, Types, UserActions } from "./types";

export default function userReducer(state: InitialUserStateProps, action: UserActions) {
  switch (action.type) {
    case Types.GetUserById: {
      return {
        ...state,
        loading: true
      }
    }
    case Types.GetUserByIdSuccess: {
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    }
    case Types.GetUserByIdFailed: {
      return state.error = action.payload.error
    }
    default: {
      return state
    }
  }
}