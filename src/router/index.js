import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Панель управления', icon: 'dashboard' }
    }]
  },

  {
    path: '/channels',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/channels/index'),
        name: 'Channels',
        meta: { title: 'Каналы', icon: 'guide', affix: true }
      }
    ]
  },

  {
    path: '/users',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/users/index'),
        name: 'Users',
        meta: { title: 'Пользователь', icon: 'user', affix: true }
      }
    ]
  },

  {
    path: '/products',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/products/index'),
        name: 'Products',
        meta: { title: 'Товары', icon: 'shopping', affix: true }
      }
    ]
  },

  {
    path: '/payments',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/payments/index'),
        name: 'Payments',
        meta: { title: 'Платежи', icon: 'money', affix: true }
      }
    ]
  },

  {
    path: '/payouts',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/payouts/index'),
        name: 'Payouts',
        meta: { title: 'Вывод средств', icon: 'bug', affix: true }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
