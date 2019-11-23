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

// 5. 编辑用户信息，这里注意的是，并不是统一的一起修改所有信息，而只是修改特定的信息
export const updateUserInfo = (id, data) => {
  return axios({
    method: 'post',
    url: `/user_update/${id}`,
    data
  })
}

// 6. 关注文章发布者
export const focusUser = (id) => {
  return axios({
    url: `/user_follows/${id}`
  })
}
// 7. 关取消注文章发布者
export const unfocusUser = (id) => {
  return axios({
    url: `/user_unfollow/${id}`
  })
}
