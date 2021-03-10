import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import NotFound from '@/views/404.vue'
import Login from '@/views/Login.vue'
import Redirect from '@/views/Redirect.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/redirect',
      hidden: true,
      children: [
        {
          path: '/redirect/:path(.*)',
          component: Redirect
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      meta: { title: '登录' },
      component: Login
    },
    {
      path: '/',
      name: 'index',
      meta: { title: '主页' },
      component: Index,
      children: []
    },
    // note
    // 404 page must be placed at the end !!!
    {
      path: '*',
      component: NotFound,
      hidden: true
    }
  ]
})
