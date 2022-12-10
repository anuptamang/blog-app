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
  id: string | number
  title: string
  body: string
  createdAt?: string
  reactions: number
  categories?: string
  tags: string[]
  views?: number
  userId?: string | number
  postImageUrl?: string
  limitText?: string | number
  layoutType?: string
}

export interface PostDataProps {
  data: PostProps
}

export interface PostsProps {
  posts: {
    posts: any
    data: PostProps[],
    limit: number,
    total: number
  }
}

export type eProps = ChangeEvent<HTMLInputElement>
export type HandleChangeProps = any

export type SetDataProps = (prev: [] | {} | string | number) => void
export type SetLoadingProps = (p: boolean | number) => void

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
  ? {
    type: Key;
  }
  : {
    type: Key;
    payload: M[Key];
  }
};