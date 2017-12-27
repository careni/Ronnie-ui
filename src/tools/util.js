// import Vue from 'vue'

/**
 * 获取DOM元素
 * @param  {String} index 选择器
 * @param  {Boolean} bool  选择第一个或者所有
 * @return {Array}       DOM树
 */
export const getDom = function (index, bool = false) {
  let el = null

  if (bool) {
    el = document.querySelector(index)
  } else {
    el = document.querySelectorAll(index)
  }

  return el
}

/**
 * 删除某个class
 * @param  {DOM} el  对应的Dom对象
 * @param  {String} cls 类名
 */
export const revCls = function (el, cls) {
  if (typeof el === 'undefined' || typeof cls === 'undefined') return

  let curCls = el.getAttribute('class')

  if (curCls === null) return

  let nextCls = ''
  if (curCls.match(cls)) {
    nextCls = curCls.replace(cls, '')
    el.setAttribute('class', nextCls)
  }
}

/**
 * 添加某个class
 * @param  {DOM} el  对应的Dom对象
 * @param  {String} cls 类名
 */
export const addCls = function (el, cls) {
  if (typeof el === 'undefined' || typeof cls === 'undefined') return

  let curCls = el.getAttribute('class')

  if (curCls === null) return

  let nextCls = ''
  if (!curCls.match(cls)) {
    nextCls = curCls + ' ' + cls
    el.setAttribute('class', nextCls)
  }
}
