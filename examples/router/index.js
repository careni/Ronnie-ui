import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import button from '@/pages/button'
import header from '@/pages/header'
import navbar from '@/pages/navbar'
import footer from '@/pages/footer'
import messagebox from '@/pages/message-box.vue'
import popup from '@/pages/popup'
import search from '@/pages/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/button',
      name: 'button',
      component: button
    },
    {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: navbar
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer
    },
    {
      path: '/messagebox',
      name: 'messagebox',
      component: messagebox
    },
    {
      path: '/popup',
      name: 'popup',
      component: popup
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})
