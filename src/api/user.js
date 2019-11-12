import axios from '@/libs/api.request'
export const login = ({ userName, password }) => {
  return axios.request({
    url: '/user/login', // userName 为电话
    data: { name: userName, password: password },
    method: 'post'
  })
}
export const logout = (token) => {
  return axios.request({
    url: '/user/logout',
    params: {
      token
    },
    method: 'get'
  })
}
// 获取用户信息
export const getUserInfo = (token) => {
  return axios.request({
    url: '/user/getUserInfoWithToken',
    params: {
      token
    },
    method: 'get'
  })
}
