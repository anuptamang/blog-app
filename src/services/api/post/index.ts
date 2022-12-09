import API from ".."

export const getAllPost = async (setData: any) => {
  try {
    API.get('/posts').then((res) => setData(res.data))
  } catch (error) {
    console.log(error)
  }
}