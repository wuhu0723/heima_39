// 1.引入axios
import axios from 'axios'
// 2.设置基准路径
axios.defaults.baseURL = 'http://127.0.0.1:3000'

// 3.添加请求拦截器
// config:就是传说中的请求报文
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 获取token
  let token = localStorage.getItem('heima_39_Authorization')
  // 如果有token，则通过请求头的方式进行传递
  if (token) {
    config.headers.Authorization = token
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 4.添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 5.暴露
export default axios
