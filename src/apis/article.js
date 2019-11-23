// 1.引入axios
import axios from '@/utils/myaxios.js'

// 2.获取当前栏目的的新闻数据
export const getArticleList = (params) => {
  return axios({
    url: '/post',
    params
  })
}

// 3.根据文章id获取文章详情
export const getArticleById = (id) => {
  return axios({
    url: `/post/${id}`
  })
}

// 4. 文章点赞
export const likeArticle = (id) => {
  return axios({
    url: `/post_like/${id}`
  })
}
