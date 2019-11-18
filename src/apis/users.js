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

// 3.注册
export const register = (data) => {
  return axios({
    method: 'post',
    url: '/register',
    data
  })
}

// 4.根据id获取用户数据
export const getUserInfoById = (id) => {
  return axios({
    // 在配置中一个属性：headers，它就可以用来设置我们需要添加的headers成员
    // headers: {
    //   'Authorization': localStorage.getItem('heima_39_Authorization')
    // },
    url: `/user/${id}`
  })
}
