// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
// Sync router with store
import { sync } from 'vuex-router-sync'
// Components
import './components'
// Plugins
import './plugins'
// Application imports
import App from './App'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'
// 全局提示框: this.$Message.info('ttt')
import VueMessage from '@/views/components/message'
// 全局确认框: this.$Confirm.confirm('hhhel')
import VueConfirm from '@/views/components/confirm'
Vue.use(VueMessage)
Vue.use(VueConfirm)
// Sync store with router
sync(store, router)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
