
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
    case Types.GetPostsByCategory: {
      return {
        ...state,
        loading: true
      }
    }
    case Types.GetPostsByCategorySuccess: {
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          posts: action.payload
        }
      };
    }
    case Types.GetPostsByCategoryFailed: {
      return state.error = action.payload.error
    }
    case Types.GetPostsByTags: {
      return {
        ...state,
        loading: true
      }
    }
    case Types.GetPostsByTagsSuccess: {
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    }
    case Types.GetPostsByTagsFailed: {
      return state.error = action.payload.error
    }
    case Types.GetPostsBySearch: {
      return {
        ...state,
        loading: true
      }
    }
    case Types.GetPostsBySearchSuccess: {
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    }
    case Types.GetPostsBySearchFailed: {
      return state.error = action.payload.error
    }
    case Types.GetPostsById: {
      return {
        ...state,
        loading: true
      }
    }
    case Types.GetPostsByIdSuccess: {
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    }
    case Types.GetPostsByIdFailed: {
      return state.error = action.payload.error
    }
    case Types.GetPostsComments: {
      return {
        ...state,
        loading: true
      }
    }
    case Types.GetPostsCommentsSuccess: {
      return {
        ...state,
        loading: false,
        postComments: action.payload
      };
    }
    case Types.GetPostsCommentsFailed: {
      return state.error = action.payload.error
    }
    default: {
      return state
    }
  }
}