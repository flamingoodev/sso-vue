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
    }, {
      path: '/login',
      name: 'login',
      meta: { title: '登录' },
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
    }
  ]
})
