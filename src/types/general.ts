import { ChangeEvent, ReactNode } from "react"

export type GenericObject<T = unknown> = { [key: string]: T }
export type Nullable<T> = T | null

export type FunctionWithParam<T> = (p: T) => void
export type FunctionWithNoParam = () => void
export type FunctionWithNoParamButReturn<R> = () => R
export type FunctionWithParamAndReturn<P, R> = (p: P) => R

export interface ApiResponseType<T> {
  message: string,
  success: boolean,
  status: boolean,
  data: T
}

export interface ApiReturn<T> extends Promise<ApiResponseType<Nullable<T>>> { }

export interface ErrorObject {
  error: string,
}


export interface ChildrenProps {
  children: ReactNode
}

export interface PostProps {
  id: string
  title: string
  body: string
  createdAt: string
  comments: number
  category: string
  views: number
  userId: number
  postImageUrl: string
  limitText?: string | number
  layoutType?: string
}

export interface PostDataProps {
  data: PostProps
}

export interface PostsProps {
  posts: {
    data: PostProps[],
    limit: number,
    total: number
  }
}

export type eProps = ChangeEvent<HTMLInputElement>
export type HandleChangeProps = any