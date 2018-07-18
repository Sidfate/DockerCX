import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      name: 'Dashboard',
      hidden: true,
      children: [{
        path: 'dashboard',
        component: () => import('@/views/dashboard/index')
      }]
    },
    {
      path: '/',
      component: Layout,
      redirect: '/containers',
      name: 'Container',
      hidden: true,
      children: [{
        path: 'containers',
        component: () => import('@/views/container/index')
      }]
    },
    {
      path: '/',
      component: Layout,
      redirect: '/images',
      name: 'Image',
      hidden: true,
      children: [
        {
          path: 'images',
          component: () => import('@/views/image/index')
        },
        {
          path: 'image/new',
          component: () => import('@/views/image/new')
        }
      ]
    },
    { path: '*', redirect: '/dashboard', hidden: true }
  ]
})
