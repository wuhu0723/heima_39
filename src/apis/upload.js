// 1.引入axios
import axios from '@/utils/myaxios.js'

// 1. 实现文件的上传
export const uploadFile = (file) => {
  return axios({
    url: '/upload',
    method: 'post',
    data: file
  })
}
