import { ChangeEvent, ReactNode } from "react"

export type ChildrenProps = {
  children: ReactNode
}

export interface PostMetaProps {
  views: number,
  comments: number
}

export interface PostProps {
  id: string,
  title: string,
  body: string,
  postMeta: PostMetaProps,
  postImageUrl: string
  limitText?: any
  layoutType?: any
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