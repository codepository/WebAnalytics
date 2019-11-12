/**
 * Vue Router
 *
 * @library
 *
 * https://router.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import Router from 'vue-router'
import Meta from 'vue-meta'

// Routes
import paths from './paths'
import { canTurnTo } from '@/libs/util'
import store from '@/store'

const LOGIN_PAGE_NAME = 'login'
function route (path, view, name, meta) {
  return {
    name: name || view,
    path,
    meta,
    component: (resovle) => import(
      `@/views/${view}.vue`
    ).then(resovle)
  }
}

Vue.use(Router)

// Create a new router
const router = new Router({
  // mode: 'history',
  mode: 'hash',
  routes: paths.map(path => route(path.path, path.view, path.name, path.meta)).concat([
    { path: '*', redirect: '/dashboard' }
  ]),
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})
const turnTo = (to, roles, next) => {
  if (canTurnTo(to, roles)) {
    next()
  } else {
    alert('需要以下权限中的一个：' + to.meta.access.join(','))
  }
}
router.beforeEach((to, from, next) => {
  if (to.meta.login && !store.state.user.hasLogin) {
    // 需要登陆才能查看,hasGetInfo为真说明已经登陆
    next({
      name: LOGIN_PAGE_NAME // 跳转到登录页
    })
  } else if (to.meta.access) {
    // 需要查看权限
    if (!store.state.user.hasLogin) { // 没有登陆
      next({
        name: LOGIN_PAGE_NAME // 跳转到登录页
      })
    } else if (store.state.user.hasGetInfo) { // 已经拉取过用户数据
      turnTo(to, store.state.user.roles, next)
    } else {
      store.dispatch('getUserInfo').then(user => {
        // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
        turnTo(to, user.roles, next)
      })
    }
  } else {
    // 直接跳转
    next()
  }
})
router.afterEach(to => {
  window.scrollTo(0, 0)
})
Vue.use(Meta)

// Bootstrap Analytics
// Set in .env
// https://github.com/MatteoGabriele/vue-analytics
if (process.env.GOOGLE_ANALYTICS) {
  Vue.use(VueAnalytics, {
    id: process.env.GOOGLE_ANALYTICS,
    router,
    autoTracking: {
      page: process.env.NODE_ENV !== 'development'
    }
  })
}

export default router
