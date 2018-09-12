import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      hidden: true
    },
    {
      path: '/dashboard',
      component: Layout,
      name: 'Dashboard',
      meta: {title: 'Dashboard', icon: 'dashboard'},
      children: [{
        path: '',
        component: () => import('@/views/dashboard/index')
      }]
    },
    {
      path: '/containers',
      component: Layout,
      name: 'Container',
      meta: {title: 'Container', icon: 'database'},
      children: [{
        path: '',
        component: () => import('@/views/container/index')
      }]
    },
    {
      path: '/images',
      component: Layout,
      name: 'Image',
      meta: {title: 'Image', icon: 'switcher'},
      children: [
        {
          path: '',
          component: () => import('@/views/image/index')
        },
        {
          path: 'new',
          component: () => import('@/views/image/new')
        }
      ]
    },
    { path: '*', redirect: '/dashboard', hidden: true }
  ]
})
