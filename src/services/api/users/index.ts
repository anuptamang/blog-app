import API from "..";


export const getUserByIdApi = async (id: string | number | undefined) => API.get(`/users/${id}`)