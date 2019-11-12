import {
  login,
  getUserInfo,
  logout
} from '@/api/user'
import { set, toggle } from '@/utils/vuex'
export default {
  state: {
    drawer: true,
    color: 'success',
    image: 'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg',
    sidebarBackgroundColor: 'rgba(27, 27, 27, 0.74)',
    userName: '',
    userId: '',
    email: '',
    avatar: null,
    hasGetInfo: false, // 判断是否有拉取数据
    hasLogin: false, // 判断是否登陆
    roles: null, // 用户拥有的权限
    phone: ''

  },
  mutations: {
    setDrawer: set('drawer'),
    setImage: set('image'),
    setColor: set('color'),
    toggleDrawer: toggle('drawer'),
    setHasLogin (state, hasLogin) {
      state.hasLogin = true
    },
    setRoles (state, roles) {
      state.roles = roles
    },
    setPhone (state, phone) {
      state.phone = phone
    },
    // *******************  以上为自定义 ****************
    setAvator (state, avatar) {
      state.avatar = avatar
    },
    setUserId (state, id) {
      state.userId = id
    },
    setUserName (state, name) {
      state.userName = name
    },
    setEmail (state, email) {
      state.email = email
    },
    setHasGetInfo (state, status) {
      state.hasGetInfo = status
    }
  },
  actions: {
    // 获取用户相关信息
    getUserInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          getUserInfo(state.userId).then(res => {
            const data = res.data
            commit('setUserId', data.userid)
            commit('setEmail', data.email)
            commit('setPhone', data.phone)
            commit('setAvator', data.avatar)
            commit('setUserName', data.username)
            commit('setRoles', data.roles)
            commit('setHasGetInfo', true)
            // 以下为自定义
            resolve(data)
          }).catch(err => {
            reject(err)
          })
        } catch (error) {
          reject(error)
        }
      })
    },
    // 登录
    handleLogin ({ commit }, { userName, password }) {
      userName = userName.trim()
      return new Promise((resolve, reject) => {
        login({
          userName,
          password
        }).then(res => {
          if (res.data.ok) {
            commit('setHasLogin', true)
            resolve()
          } else {
            alert(res.data.message)
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 退出登录
    handleLogOut ({ state, commit }) {
      return new Promise((resolve, reject) => {
        // logout(state.userId).then(res => {
        //   if (res.data.ok) {
        //     commit('setHasLogin', false)
        //     commit('setRoles', [])
        //     resolve()
        //   } else {
        //     alert(res.data.message)
        //   }
        // }).catch(err => {
        //   reject(err)
        // })
        // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
        commit('setHasLogin', false)
        resolve()
      })
    }
  }
}
