import Vue from 'vue'
import messageVue from './message.vue'
const defaults = {
  show: false,
  text: '',
  duration: '3000',
  type: ''
}
let messageInstance
function getMessageInstance () {
  if (!messageInstance) {
    messageInstance = new MessageVueConstructor({
      el: document.createElement('div'),
      data: defaults
    })
    let parent = document.body
    parent.appendChild(messageInstance.$el)
  }
  return messageInstance
}
const MessageVueConstructor = Vue.extend(messageVue)
const messageBox = (type, text) => {
  let instance = getMessageInstance()
  instance.show = false
  instance.type = type
  instance.text = text
  Vue.nextTick(() => {
    instance.show = true
  })
  return instance
}
export default {
  name: 'Message',
  info (text) {
    return this.message('info', text)
  },
  success (text) {
    return this.message('success', text)
  },
  warning (text) {
    return this.message('warning', text)
  },
  error (text) {
    return this.message('error', text)
  },
  message (type, text) {
    return messageBox(type, text)
  }
}
