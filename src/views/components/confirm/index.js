import Confirm from './src/index'
export default {
  install (Vue) {
    Vue.prototype.$Confirm = Confirm
  }
}
