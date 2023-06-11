import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: '/',
    component: () => import('../layout'),
    redirect: '/login',
    children: [
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/user/index.vue')
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: 'book',
        name: 'book',
        component: () => import('@/views/book/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
