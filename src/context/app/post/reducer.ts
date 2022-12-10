
import { InitialPostsStateProps, PostActions, Types } from "./types";

export default function postReducer(state: InitialPostsStateProps, action: PostActions) {
  switch (action.type) {
    case Types.GetPosts: {
      return {
        ...state,
        loading: true
      }
    }
    case Types.GetPostsSuccess: {
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    }
    case Types.GetPostsFailed: {
      return state.error = action.payload.error
    }
  }
}