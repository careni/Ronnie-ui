/**
 * 1.default options
 * 2.instance
 * 3.constructor
 * 4.add events
 * 5.trriger
 * 6.callback
 * 7.promise
 * 8.send selected value
 */
import vuePicker from './index.vue'
import Vue from 'vue'
import * as utils from '../../src/tools/util'

let PickerConstructor = Vue.extend(vuePicker)

let instance
let defaults = {
  lineHeight: 50,
  titleHeight: 40,
  unit: 'px',
  levels: 3,
  itemsShow: 3,
  leveloneId: null,
  leveltwoId: null,
  levelthreeId: null,
  levelfourId: null,
  levelfiveId: null,
  levelsixId: null,
  relationOneTwo: true,
  relationTwoThree: true,
  relationThreeFour: true,
  relationFourFive: true,
  relationFiveSix: true
}
let nameOfRelation = ['relationOneTwo', 'relationTwoThree', 'relationThreeFour', 'relationFourFive', 'relationFiveSix']
let nameOfLevel = ['levelone', 'leveltwo', 'levelthree', 'levelfour', 'levelfive', 'levelsix']
let Events = {
  startPosition: 0,
  movePosition: 0,
  endPosition: 0,
  dValue: 0,
  currentTranslateY: 0,
  pattern: '\\((.+?)\\)',
  data: [],
  options: {},
  supportTouch: function () {

  },
  handleTouchStart: function (e) {
    e.preventDefault()
    let el = e.target.parentNode
    Events.startPosition = e.touches[0].pageY
    Events.currentTranslateY = parseFloat(el.style.transform.match(new RegExp(Events.pattern), 'igm')[1])
  },
  handleTouchMove: function (e) {
    e.preventDefault()
    Events.movePosition = e.touches[0].pageY
    Events.dValue = Events.movePosition - Events.startPosition
    let el = e.target.parentNode
    el.style.transform = `translateY(${(Events.currentTranslateY + Events.dValue)}px)`
    let range = Events.currentTranslateY + Events.dValue
    let min = Events.options.lineHeight * (Math.floor(Events.options.itemsShow / 2) - 1) + Events.options.lineHeight / 2
    let max = Events.options.lineHeight * (Math.floor(Events.options.itemsShow / 2)) + Events.options.lineHeight / 2
    console.log(min, max)
    for (let i = 0; i < el.childNodes.length; i++) {
      if (range > min - el.childNodes[i].offsetTop && range < max - el.childNodes[i].offsetTop) {
        utils.addCls(el.childNodes[i], 'at')
      } else {
        utils.revCls(el.childNodes[i], 'at')
      }
    }
  },
  handleTouchEnd: function (e) {
    e.preventDefault()
    let el = e.target.parentNode
    Events.currentTranslateY = Events.currentTranslateY + Events.dValue

    let Max = Math.floor(Events.options.itemsShow / 2) * Events.options.lineHeight
    let Min = (el.scrollHeight - (Events.options.itemsShow - Math.floor(Events.options.itemsShow / 2)) * Events.options.lineHeight) * -1
    if (Events.currentTranslateY < Min) {
      Events.currentTranslateY = Min
    } else if (Events.currentTranslateY > Max) {
      Events.currentTranslateY = Max
    }
    let index = Math.round(Events.currentTranslateY / Events.options.lineHeight, 0)
    Events.currentTranslateY = index * Events.options.lineHeight

    el.style.transform = `translateY(${Events.currentTranslateY}px)`
    utils.addCls(el.childNodes[Math.floor(Events.options.itemsShow / 2) - index], 'at')
    let currentIndex = el.dataset.levels - 1
    let id = el.childNodes[Math.floor(Events.options.itemsShow / 2) - index].dataset.id
    for (let i = currentIndex; i < Events.options.levels - 1; i++) {
      console.log(nameOfRelation[currentIndex])
      if (Events.options[nameOfRelation[currentIndex]]) {
        trigger(id, currentIndex, Events.options)
        currentIndex++
        id = instance[nameOfLevel[currentIndex]][0].id
      }
    }
  },
  queryCurrentTranslateY: function () {},
  specificMoveToCenter: function (lineHeight, selectObj, index) {
    instance.$nextTick(function () {
      let el = utils.gdom(`.i-picker-item-${nameOfLevel[index]}`)[0]
      let children = el.childNodes
      if (selectObj) {
        for (let i = 0; i < children.length; i++) {
          if (children[i].dataset.id === selectObj) {
            Events.moveToCenter(el, children[i], lineHeight)
          }
        }
      } else {
        Events.moveToCenter(el, children[0], lineHeight)
      }
    })
  },
  AllFirstMoveToCenter: function () {},
  moveToCenter: function (el, which, lineHeight) {
    let offsetTop = which.offsetTop
    el.style.transform = `translateY(${(offsetTop - lineHeight * Math.floor(Events.options.itemsShow / 2)) * -1}px)`
    utils.addCls(which, 'at')
  }
}
let defaultCallback = function () {}

let bindEvents = function () {
  let allUl = utils.gdom('.i-picker-item-child')
  for (let i = 0; i < allUl.length; i++) {
    allUl[i].addEventListener('touchstart', Events.handleTouchStart, false)
    allUl[i].addEventListener('touchmove', Events.handleTouchMove, false)
    allUl[i].addEventListener('touchend', Events.handleTouchEnd, false)
  }
}
let trigger = function (id, index, options) {
  if (index >= Events.options.levels - 1) return
  let arr = []
  for (let i = 0; i < Events.data[index + 1].length; i++) {
    if (Events.data[index + 1][i].parentId === id) {
      arr.push(Events.data[index + 1][i])
    }
  }
  instance[nameOfLevel[index + 1]] = arr
  initPicker.initStyle(options)
  Events.specificMoveToCenter(options.lineHeight, null, index + 1)
}
let initPicker = {
  initInstance: function () {
    instance = new PickerConstructor({
      el: document.createElement('div')
    })
    instance.callback = defaultCallback
  },

  initStyle: function (options) {
    instance.$nextTick(function () {
      let allUl = utils.gdom('.i-picker-item-child')
      let allLi = utils.gdom('.i-picker-item-child-li')
      let header = utils.gdom('.i-picker-header')[0]
      let center = utils.gdom('.i-picker-center')[0]
      let content = utils.gdom('.i-picker-content')[0]
      let padding = parseFloat(document.defaultView.getComputedStyle(content, '')['padding'].split(' ')[0])
      let lenUl = allUl.length
      let lenLi = allLi.length
      let width = document.body.clientWidth / options.levels

      for (let i = 0; i < lenLi; i++) {
        utils.setSty(allLi[i], 'lineHeight', options.lineHeight + options.unit)
        utils.setSty(allLi[i], 'height', options.lineHeight + options.unit)
      }
      for (let i = 0; i < lenUl; i++) {
        utils.setSty(allUl[i], 'height', options.lineHeight * options.itemsShow + options.unit)
        utils.setSty(allUl[i], 'width', width + options.unit)
      }
      utils.setSty(center, 'height', options.lineHeight + options.unit)
      utils.setSty(center, 'bottom', options.lineHeight * Math.floor(options.itemsShow / 2) + padding + options.unit)
      utils.setSty(header, 'height', options.titleHeight + options.unit)
      utils.setSty(header, 'bottom', options.lineHeight * options.itemsShow + 2 * padding + options.unit)
    })
  },

  initData: function (options, data, index, selectObj, fatherSelectObj) {
    let excute = nameOfLevel[index]
    let newExcuteData = []
    if (index !== 0 && options[nameOfRelation[index - 1]]) {
      for (let i = 0; i < data[index].length; i++) {
        if (data[index][i].parentId === fatherSelectObj) {
          newExcuteData.push(data[index][i])
        }
      }
      instance[excute] = newExcuteData
      initPicker.initStyle(options)
      Events.specificMoveToCenter(options.lineHeight, selectObj, index)
    } else {
      instance[excute] = data[index]
      initPicker.initStyle(options)
      Events.specificMoveToCenter(options.lineHeight, selectObj, index)
    }
  },
  initDefaultSelectObj: function (data, options) {
    let level = options.levels
    for (let i = 0; i < level; i++) {
      if (i === 0) {
        initPicker.initData(options, data, 0, options.leveloneId, null)
      } else {
        let fatherSelectObj
        if (options[nameOfRelation[i - 1]]) {
          fatherSelectObj = options[nameOfLevel[i - 1] + 'Id'] || instance[nameOfLevel[i - 1]][0].id
        } else {
          fatherSelectObj = null
        }
        initPicker.initData(options, data, i, options[nameOfLevel[i] + 'Id'], fatherSelectObj)
      }
    }
  }
}

let Picker = function (levels, data, options, callback) {
  if (!instance) {
    initPicker.initInstance()
  }
  Events.data = data
  options.levels = levels
  // for (let i = 0; i < options.relation.length; i++) {
  //   options[nameOfRelation[i]] = !!options.relation
  // }
  options = utils.extend({}, defaults, options)
  Events.options = options

  for (var key in options) {
    instance[key] = options[key]
  }

  document.body.appendChild(instance.$el)

  initPicker.initStyle(options)
  initPicker.initDefaultSelectObj(data, options)

  instance.$nextTick(function () {
    bindEvents()
  })

  instance.flag = true
}
export default Picker
