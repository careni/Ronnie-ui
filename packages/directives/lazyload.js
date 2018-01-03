import merge from '../../src/tools/merge'

let defaults = {
  el: 'lazy',
  time: 0,
  distance: 100
}
// clientHeight
const client = window.innerHeight - defaults.distance || document.documentElement.clientHeight - defaults.distance

// 检测是否在视野中
const checkInSite = function () {
  let el = document.querySelectorAll(`.${defaults.el}`)
  let len = el.length

  if (len === 0) return

  for (let i = 0; i < len; i++) {
    let offset = el[i].offsetTop
    let scrollTop = document.body.scrollTop
    if (offset - scrollTop < client) {
      loadIMG(el[i])
    }
  }
}

// 加载图片
const loadIMG = function (el) {
  setTimeout(function () {
    if (el.nodeName === 'IMG' && el.getAttribute('lazysrc')) {
      el.setAttribute('src', el.getAttribute('lazysrc'))
      el.setAttribute('lazysrc', '')
      let newClass = el.getAttribute('class').replace('lazy', '')
      el.setAttribute('class', newClass)
    }
  }, defaults.time)
}

// LAZYLOAD
const lazyload = function (options) {
  if (typeof options === 'string') {
    options = {
      el: options
    }
    defaults = merge({}, defaults, options)
  } else if (options) {
    defaults = merge({}, defaults, options)
  }
  this.nextTick(function () {
    checkInSite()
  })

  document.body.addEventListener('scroll', checkInSite, false)
}

export default lazyload
