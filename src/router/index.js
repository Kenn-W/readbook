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
        path: 'information',
        name: 'information',
        component: () => import('@/views/student/information.vue')
      },
      {
        path: 'message',
        name: 'message',
        component: () => import('@/views/student/message.vue')
      },
      {
        path: 'teamLobby',
        name: 'teamLobby',
        component: () => import('@/views/student/teamLobby.vue')
      },
      {
        path: 'teacher',
        name: 'teacher',
        component: () => import('@/views/teacher/index.vue')
      },
      {
        path: 'result',
        name: 'result',
        component: () => import('@/views/teacher/result.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
