import { ActionMap } from "../../../types";

export interface InitialPostsStateProps {
  data: {
    limit?: number
    posts: {}
    skip?: number
    total?: number
  }
  error: {} | null
  loading: boolean
}

export enum Types {
  GetPosts = 'GET_POSTS',
  GetPostsSuccess = 'GET_POSTS_SUCCESS',
  GetPostsFailed = 'GET_POSTS_FAILED',
}

export type PostsPayload = {
  [Types.GetPosts]: {
    loading: boolean
  };
  [Types.GetPostsSuccess]: {
    limit: any;
    loading: boolean
    data: []
  };
  [Types.GetPostsFailed]: {
    error: {}
  };
}

export type PostActions = ActionMap<PostsPayload>[keyof ActionMap<PostsPayload>];