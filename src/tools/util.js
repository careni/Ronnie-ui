/**
 * 获取DOM元素
 * @param  {String} index 选择器
 * @return {Array}       DOM树
 */
export const gdom = function (index) {
  let el = null

  el = document.querySelectorAll(index)
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
    let clsArr = curCls.split(' ')
    let index = clsArr.indexOf(cls)
    clsArr.splice(index, index + 1)
    nextCls = clsArr.join(' ')
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
    let clsArr = curCls.split(' ')
    clsArr.push(cls)
    nextCls = clsArr.join(' ')
    el.setAttribute('class', nextCls)
  }
}

/**
 * 拷贝对象
 * @param {*} target
 */
export const extend = function (target) {
  for (var i = 1, j = arguments.length; i < j; i++) {
    var source = arguments[i]
    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        var value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }
  return target
}
