// import Vue from 'vue'

/**
 * 获取DOM元素
 * @param  {String} index 选择器
 * @param  {Boolean} bool  选择第一个或者所有
 * @return {Array}       DOM树
 */
const getDom = function (index, bool = false) {
  let el = null

  if (bool) {
    el = document.querySelector(index)
  } else {
    el = document.querySelectorAll(index)
  }

  return el
}