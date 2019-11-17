// 1.引入axios
import axios from '@/utils/myaxios.js'

// 2.添加方法实现登陆业务
export const login = (data) => {
  return axios({
    method: 'post',
    url: '/login',
    data
  })
}
