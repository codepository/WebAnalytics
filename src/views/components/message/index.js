import Message from './src/index'
export default {
  install (Vue) {
    Vue.prototype.$Message = Message
  }
}
