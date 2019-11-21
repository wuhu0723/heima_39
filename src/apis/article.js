// 1.引入axios
import axios from '@/utils/myaxios.js'

// 2.获取当前栏目的的新闻数据
export const getArticleList = (params) => {
  return axios({
    url: '/post',
    params
  })
}
