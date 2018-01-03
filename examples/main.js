// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Ipanel from '~/index'
import './resize.js'

Vue.config.productionTip = false

Vue.use(Ipanel)
Vue.$Lazyload({
  el: 'lazy',
  time: 300,
  distance: 50
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
