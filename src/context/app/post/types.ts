import { ActionMap, CommentsDataProps } from "../../../types";

export interface InitialPostsStateProps {
  data: {
    limit?: number
    posts: {}
    skip?: number
    total?: number
  }
  postComments: CommentsDataProps
  error: {} | null
  loading: boolean
}

export enum Types {
  GetPosts = 'GET_POSTS',
  GetPostsSuccess = 'GET_POSTS_SUCCESS',
  GetPostsFailed = 'GET_POSTS_FAILED',
  GetPostsByCategory = 'GET_POSTS_BY_CATEGORY',
  GetPostsByCategorySuccess = 'GET_POSTS_BY_CATEGORY_SUCCESS',
  GetPostsByCategoryFailed = 'GET_POSTS_BY_CATEGORY_FAILED',
  GetPostsByTags = 'GET_POSTS_BY_TAGS',
  GetPostsByTagsSuccess = 'GET_POSTS_BY_TAGS_SUCCESS',
  GetPostsByTagsFailed = 'GET_POSTS_BY_TAGS_FAILED',
  GetPostsBySearch = 'GET_POSTS_BY_SEARCH',
  GetPostsBySearchSuccess = 'GET_POSTS_BY_SEARCH_SUCCESS',
  GetPostsBySearchFailed = 'GET_POSTS_BY_SEARCH_FAILED',
  GetPostsById = 'GET_POSTS_BY_ID',
  GetPostsByIdSuccess = 'GET_POSTS_BY_ID_SUCCESS',
  GetPostsByIdFailed = 'GET_POSTS_BY_ID_FAILED',
  GetPostsComments = 'GET_POSTS_COMMENTS',
  GetPostsCommentsSuccess = 'GET_POSTS_COMMENTS_SUCCESS',
  GetPostsCommentsFailed = 'GET_POSTS_COMMENTS_FAILED',
}

export type PostsPayload = {
  [Types.GetPosts]: {
    loading: boolean
  };
  [Types.GetPostsSuccess]: {
    limit: number;
    loading: boolean
    data: []
  };
  [Types.GetPostsFailed]: {
    error: {}
  };
  [Types.GetPostsByCategory]: {
    loading: boolean
  };
  [Types.GetPostsByCategorySuccess]: {
    limit: number;
    loading: boolean
    data: []
  };
  [Types.GetPostsByCategoryFailed]: {
    error: {}
  };
  [Types.GetPostsByTags]: {
    loading: boolean
  };
  [Types.GetPostsByTagsSuccess]: {
    limit: number;
    loading: boolean
    data: []
  };
  [Types.GetPostsByTagsFailed]: {
    error: {}
  };
  [Types.GetPostsBySearch]: {
    loading: boolean
  };
  [Types.GetPostsBySearchSuccess]: {
    limit: number;
    loading: boolean
    data: []
  };
  [Types.GetPostsBySearchFailed]: {
    error: {}
  };
  [Types.GetPostsById]: {
    loading: boolean
  };
  [Types.GetPostsByIdSuccess]: {
    limit: number;
    loading: boolean
    data: []
  };
  [Types.GetPostsByIdFailed]: {
    error: {}
  };
  [Types.GetPostsComments]: {
    loading: boolean
  };
  [Types.GetPostsCommentsSuccess]: {
    limit: number;
    loading: boolean
    data: []
  };
  [Types.GetPostsCommentsFailed]: {
    error: {}
  };
}

export type PostActions = ActionMap<PostsPayload>[keyof ActionMap<PostsPayload>];