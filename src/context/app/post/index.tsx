import { createContext, Dispatch, useReducer } from 'react'
import { ChildrenProps, IDispatch } from '../../../types'
import postReducer from './reducer'
import { InitialPostsStateProps } from './types'

export const initialPostsState: InitialPostsStateProps = {
  data: {
    limit: 9,
    posts: {},
    skip: 0,
    total: 0,
  },
  postComments: {
    comments: [],
    total: 0,
    skip: 0,
    limit: 0,
  },
  loading: false,
  error: null,
}

export const PostContext = createContext<{
  state: InitialPostsStateProps | any
  dispatch: Dispatch<IDispatch>
}>({
  state: initialPostsState,
  dispatch: () => null,
})

export const PostProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = useReducer<any>(postReducer, initialPostsState)

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  )
}
