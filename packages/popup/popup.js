import Vue from 'vue'
import vuepopup from './index.vue'
import merge from '../../src/tools/merge.js'

let DEFAULT_TEXT = '默认显示内容'

let defaults = {
  timer: true, // on/off timer
  type: 'display', // loading or display
  message: DEFAULT_TEXT, // default message
  time: 3000,
  flag: false
}

let PopupContructor = Vue.extend(vuepopup)

let instance, currentMsg
let msgQueue = []

let defaultCallback = function () {
  if (currentMsg) {
    let callback = currentMsg.callback || ''
    if (currentMsg.options.timer) {
      if (typeof callback === 'function') {
        setTimeout(callback, currentMsg.options.time)
      }
      if (currentMsg.resolve) {
        setTimeout(currentMsg.resolve, currentMsg.options.time)
      }
    }
  }
  if (currentMsg.options.timer) {
    setTimeout(Popup.close, currentMsg.options.time)
  }
}

let initInstance = function () {
  instance = new PopupContructor({
    el: document.createElement('div')
  })

  instance.callback = defaultCallback
}

let showMsg = function () {
  if (!instance) {
    initInstance()
  }

  if (msgQueue.length > 0) {
    currentMsg = msgQueue.shift()

    let options = currentMsg.options
    for (let prop in options) {
      if (options.hasOwnProperty(prop)) {
        instance[prop] = options[prop]
      }
    }
    if (currentMsg.callback === undefined) {
      instance.callback = defaultCallback
    }
    document.body.appendChild(instance.$el)
    instance.flag = true

    if (instance.timer && instance.time) {
      instance.callback()
    }
  }
}

let Popup = function (options, callback) {
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  if (typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      msgQueue.push({
        options: merge({}, defaults, options),
        callback: callback,
        resolve: resolve,
        reject: reject
      })
      showMsg()
    })
  } else {
    msgQueue.push({
      options: merge({}, defaults, options),
      callback: callback
    })
  }
}

Popup.close = function () {
  instance.flag = false
  setTimeout(function () {
    let parent = instance.$el.parentNode
    parent.removeChild(instance.$el)
  }, 310)
}
Popup.alert = function (message, time) {
  let options = merge({}, defaults, {
    message: message,
    time: time,
    timer: true
  })
  return Popup(options)
}
Popup.loading = function (message) {
  let options = merge({}, defaults, {
    message: message,
    timer: false
  })
  return Popup(options)
}
export default Popup
