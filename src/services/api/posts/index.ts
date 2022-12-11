import API from "..";

export const getAllPostApi = async () => API.get('/posts')
export const searchAllPostApi = async (text: string) => API.get(`/posts/search?q=${text}`)
export const getPostByIdApi = async (id: string | number | undefined) => API.get(`/posts/${id}`)
export const getPostCommentsApi = async (postId: string | number | undefined) => API.get(`/posts/${postId}/comments`)