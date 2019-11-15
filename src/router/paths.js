/**
 *   {
    path: '/workcomplete',
    name: '我审批的',
    view: 'work/complete/complete',
    meta: {
      keepAlive: true                // 表示是否缓存，默认不缓存
      access: ['开发人员']           // 表示需要的权限
      login: false                   // 表示需要登陆才能查看
    }
  },
 */
// 多级path 会报错
export default [
  {
    path: '/dashboard',
    // Relative to /src/views
    name: 'dashboard',
    view: 'Dashboard'
  },
  {
    path: '/icons',
    view: 'Icons'
  },
  {
    path: '/login',
    name: 'login',
    view: 'login/login'
  }
]
