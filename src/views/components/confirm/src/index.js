import Vue from 'vue'
import Confirm from './confirm'
const ConfirmVueConstructor = Vue.extend(Confirm)
var instance
var res, rej
ConfirmVueConstructor.prototype.close = function (action) {
  instance.show = false
  if (action === 'ok') {
    res()
  } else {
    rej()
  }
}
const defaults = {
  show: false,
  text: ''
}

function getInstance () {
  if (!instance) {
    instance = new ConfirmVueConstructor({
      el: document.createElement('div'),
      data: defaults
    })
    let parent = document.body
    parent.appendChild(instance.$el)
  }
  return instance
}

const box = (text) => {
  let instance = getInstance()
  instance.text = text
  Vue.nextTick(() => {
    instance.show = true
  })
  return new Promise((resolve, reject) => {
    res = resolve
    rej = reject
  })
}
export default {
  name: 'Confirm',
  confirm (text) {
    return box(text)
  }
}
