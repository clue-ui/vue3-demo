import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import example from '@/views/example'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/example'
    },
    {
      path: '',
      component: () => import(/* webpackChunkName: "chunk.main" */ './theme/default'),
      children: [
        ...example.route
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
