import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import NotFound from '@/views/404.vue'
import Login from '@/views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: { title: '登录' },
      component: Login
    },
    {
      path: '/',
      name: 'home',
      meta: { title: '主页' },
      component: Home,
      children: [
        {
          path: '/404',
          name: '404',
          meta: { title: '404' },
          component: NotFound,
          hidden: true
        }
      ]
    },
    {
      path: '/404',
      name: 'about',
      component: () => import('@/views/404')
    }
  ]
})
