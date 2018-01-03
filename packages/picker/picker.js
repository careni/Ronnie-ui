import vuePicker from './index.vue'
import Vue from 'vue'
import * as utils from '../../src/tools/util'

let defaults = {
  lineHeight: 50,
  titleHeight: 40,
  unit: 'px',
  rows: 3,
  columns: 2,
  leveloneId: '10001',
  leveltwoId: '10002',
  levelthreeId: 0,
  levelfourId: 0,
  levelfiveId: 0,
  levelsixId: 0
}
let PickerConstructor = Vue.extend(vuePicker)

let instance

let dataName = ['levelone', 'leveltwo', 'levelthree', 'levelfour', 'levelfive', 'levelsix']

/**
 * 初始化组件实例
 */
let initInstance = function () {
  instance = new PickerConstructor({
    el: document.createElement('div')
  })
}

/**
 * 初始化组件样式
 * @param {*} options
 */
let initStyle = function (options) {
  let li = utils.gdom('.i-picker-item-child-li')
  let ul = utils.gdom('.i-picker-item-child')
  let header = utils.gdom('.i-picker-header')[0]
  let center = utils.gdom('.i-picker-center')[0]

  for (let i = 0; i < li.length; i++) {
    li[i].style.height = options.lineHeight + options.unit
    li[i].style.lineHeight = options.lineHeight + options.unit
  }
  for (let i = 0; i < ul.length; i++) {
    ul[i].style.height = options.lineHeight * options.rows + options.unit
    ul[i].style.padding = '10px 0'
  }
  header.style.height = options.titleHeight + options.unit
  header.style.bottom = options.lineHeight * options.rows + 20 + options.unit
  center.style.height = options.lineHeight + options.unit
  center.style.bottom = Math.floor(options.rows / 2) * options.lineHeight + 10 + options.unit
}

let initDisplayId = function (index, len, levelid, options) {
  if (index >= len) return
  let height
  if (levelid === '') {
    return -(10 - options.lineHeight * Math.floor(options.rows / 2) - 10)
  }
  let cls = ''
  switch (index) {
    case 0:
      cls = `.i-picker-item-levelone-li[data-id="${levelid}"]`
      break
    case 1:
      cls = `.i-picker-item-leveltwo-li[data-id="${levelid}"]`
      break
    case 2:
      cls = `.i-picker-item-levelthree-li[data-id="${levelid}"]`
      break
    case 3:
      cls = `.i-picker-item-levelfour-li[data-id="${levelid}"]`
      break
    case 4:
      cls = `.i-picker-item-levelfive-li[data-id="${levelid}"]`
      break
    case 5:
      cls = `.i-picker-item-levelsix-li[data-id="${levelid}"]`
      break
    default:
      break
  }
  let el = utils.gdom(cls)[0]
  height = el.offsetTop - options.lineHeight * Math.floor(options.rows / 2) - 10
  utils.addCls(el, 'at')
  return -height
}

let getMaxAndMin = function (el, options) {
  let scrollHeight = el.scrollHeight
  let height = parseFloat(el.style.height)

  let Max = Math.floor(options.rows / 2) * options.lineHeight + 10
  let Min = ((scrollHeight - height) + Math.floor(options.rows / 2) * options.lineHeight - 10) * -1
  return {
    max: Max,
    min: Min
  }
}

let addEventListener = function (el, options, data, id) {
  console.log(id)
  let currentTopHeight, startPos, movePos, startTime, endTime, dValue, nowTop

  let range = getMaxAndMin(el, options)

let addEventListener = function (el, options, data, id) {
  console.log(id)
  let currentTopHeight, startPos, movePos, startTime, endTime, dValue, nowTop

  let range = getMaxAndMin(el, options)

  el.addEventListener('touchstart', function (evt) {
    currentTopHeight = parseFloat(el.style.top) || 0
    evt.returnValue = false
    startTime = new Date().getTime()
    startPos = evt.touches[0].pageY
  })

  el.addEventListener('touchmove', function (evt) {
    movePos = evt.touches[0].pageY
    dValue = movePos - startPos

    nowTop = currentTopHeight + dValue
    // 最大最小的top值
    if (nowTop < range.min) {
      nowTop = range.min
    } else if (nowTop > range.max) {
      nowTop = range.max
    }

    let atEl = el.childNodes
    let centerUp = options.lineHeight * (Math.floor(options.rows / 2) + 1) + 10 - options.lineHeight / 2
    let centerDown = options.lineHeight * Math.floor(options.rows / 2) + 10 - options.lineHeight / 2

    // 当前选择项
    for (let i = 0; i < atEl.length; i++) {
      if (atEl[i].offsetTop + nowTop > centerDown && atEl[i].offsetTop + nowTop < centerUp) {
        utils.addCls(atEl[i], 'at')
      } else {
        utils.revCls(atEl[i], 'at')
      }
    }
    el.style.top = nowTop + options.unit
  })

  el.addEventListener('touchend', function (evt) {
    endTime = new Date().getTime()
    console.log(endTime - startTime)

    let index = Math.round(nowTop / options.lineHeight, 0)
    nowTop = index * options.lineHeight
    el.style.top = nowTop + options.unit

    let atEl = el.childNodes
    for (let i = 0; i < atEl.length; i++) {
      if (atEl[i].getAttribute('class').match('at')) {
        let id = atEl[i].getAttribute('data-id')
        console.log(id)
        let cur = []
        for (let j = 0; j < data[1].length; j++) {
          if (data[1][j].parentId === id) {
            cur.push(data[1][j])
          }
        }
        instance.leveltwo = cur
        instance.$nextTick(function () {
          initStyle(options)
        })

        console.log(instance.leveltwo)
      }
    }
  })
}
// PICKER
let Picker = function (colunms, data, options) {
  if (!instance) {
    initInstance()
  }
  options.colunms = colunms
  options = utils.extend({}, defaults, options)

  for (let key in options) {
    instance[key] = options[key]
  }

  let len = data.length
  if (len === 0) return

  for (let i = 0; i < len; i++) {
    instance[dataName[i]] = data[i]
  }

  document.body.appendChild(instance.$el)

  instance.$nextTick(function () {
    initStyle(options)
    let el = utils.gdom('.i-picker-item-child')
    for (let i = 0; i < el.length; i++) {
      let topinit = initDisplayId(i, 2, '', options)
      el[i].style.top = topinit + 'px'
      let id = el[i].getAttribute('data-columns')
      addEventListener(el[i], options, data, id)
    }
  })

  instance.flag = true
}

export default Picker
