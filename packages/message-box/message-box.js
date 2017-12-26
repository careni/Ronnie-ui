import Vue from 'vue'
import MessageBoxVue from './index.vue'
import merge from '../../src/tools/merge.js'

let CONFIRM_TEXT = '确定'
let CANCEL_TEXT = '取消'
let SINGLE_TEXT = '好的'
let PLACEHOLDER = '默认输入内容...'

let defaults = {
  message: '默认输入框',
  type: 'msg',
  singleButton: false,
  cancelText: CANCEL_TEXT,
  confirmText: CONFIRM_TEXT,
  singleText: SINGLE_TEXT,
  placeholder: PLACEHOLDER,
  inputValue: '',
  flag: false
}

let MessageConstructor = Vue.extend(MessageBoxVue)

let instance, currentMsg
let msgQueue = []

const defaultCallback = action => {
  if (currentMsg) {
    var callback = currentMsg.callback
    if (typeof callback === 'function') {
      if (instance.type === 'input' || instance.type === 'textarea') {
        callback(instance.inputValue, action)
      } else {
        callback(action)
      }
    }
    if (currentMsg.resolve) {
      if (action === 'confirm') {
        if (instance.type === 'input' || instance.type === 'textarea') {
          currentMsg.resolve({ value: instance.inputValue, action })
        } else {
          currentMsg.resolve(action)
        }
      } else if (action === 'cancel' && currentMsg.reject) {
        currentMsg.reject(action)
      }
    }
  }
  MessageBox.close()
}

let initInstance = function () {
  instance = new MessageConstructor({
    el: document.createElement('div')
  })

  instance.callback = defaultCallback
}

var showNextMsg = function () {
  if (!instance) {
    initInstance()
  }

  if (!instance.flag) {
    if (msgQueue.length > 0) {
      currentMsg = msgQueue.shift()

      var options = currentMsg.options
      for (var prop in options) {
        if (options.hasOwnProperty(prop)) {
          instance[prop] = options[prop]
        }
      }
      if (options.callback === undefined) {
        instance.callback = defaultCallback
      }
      document.body.appendChild(instance.$el)
      instance.flag = true
    }
  }
}

var MessageBox = function (options, callback) {
  if (typeof options === 'string') {
    options = {
      message: options
    }
  } else if (options.callback && !callback) {
    callback = options.callback
  }

  if (typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      msgQueue.push({
        options: merge({}, defaults, MessageBox.defaults || {}, options),
        callback: callback,
        resolve: resolve,
        reject: reject
      })
      showNextMsg()
    })
  } else {
    msgQueue.push({
      options: merge({}, defaults, MessageBox.defaults || {}, options),
      callback: callback
    })
    showNextMsg()
  }
}

MessageBox.close = function () {
  instance.flag = false
  setTimeout(function () {
    let parent = instance.$el.parentNode
    parent.removeChild(instance.$el)
  }, 310)
}

MessageBox.input = function (message, callback) {
  let options = merge({}, defaults, {
    type: 'input',
    message: message
  })
  return MessageBox(options, callback)
}

MessageBox.textarea = function (message, callback) {
  let options = merge({}, defaults, {
    type: 'textarea',
    message: message
  })
  return MessageBox(options, callback)
}

export default MessageBox
