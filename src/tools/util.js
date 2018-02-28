// get dom
export const gdom = function (index) {
  let el = null
  el = document.querySelectorAll(index)
  return el
}

// remove class from element
export const revCls = function (el, cls) {
  if (!hasCls(el, cls)) return

  let reg = new RegExp('(^|\\s)' + cls + '(\\s|$)', 'g')
  el.className = el.className.replace(reg, ' ')
}

// add class to element
export const addCls = function (el, cls) {
  if (hasCls(el, cls)) return

  let newClass = el.className.split(' ')
  newClass.push(cls)
  el.className = newClass.join(' ')
}

// whether element has class
export const hasCls = function (el, cls) {
  let reg = new RegExp('(^|\\s)' + cls + '(\\s|$)')
  return reg.test(el.className)
}

// copy object
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

export const setSty = function (el, attr, index) {
  el.style[attr] = index
}
