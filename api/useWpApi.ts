import type { IPageData } from '~/types/WPJsonData'

export default () => {
  const config = useRuntimeConfig()
  let URI: string = ''
  if(process.dev){
    URI = config.public.LOCAL_API_URI
  } else{
    URI = config.public.API_URI
  }
  const get = async (endpoint: string) => useFetch(`${URI}/wp-json/wp/v2/${endpoint}`)

  const getPosts = async (categories: string, page: number = 1, postsPerPage: number = 10) => {
    let query = `posts?_embed&per_page=${postsPerPage}&page=${page}`
    if (categories) {
      query += `&categories=${categories}`
    }
    return get(query)
  }

  const getPost = async (slug: string) => get(`posts?slug=${slug}&_embed`)
  const getPage = async (slug: string) => get(`pages?slug=${slug}&_embed`)

  const getAllCategories = async () => get(`categories`)

  const getCategory = async (slug: string) => get(`categories?slug=${slug}`)

  const takeData = (data: IPageData[]) => {
    return {
      title: data[0].title.rendered,
      content: data[0].content.rendered,
    }
  }

  return {
    get,
    getPage,
    getPosts,
    getPost,
    getAllCategories,
    getCategory,
    takeData,
  }
}
