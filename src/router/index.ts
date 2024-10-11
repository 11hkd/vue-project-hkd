import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/WelcomeView.vue')
  }, //异步加载
  {
    path: '/example01View',
    component: () => import('@/views/Example01/example01View.vue')
  },
  {
    path: '/example02View',
    component: () => import('@/views/Example02/example02View.vue')
  },
  {
    path: '/example03View',
    component: () => import('@/views/Example03/example03View.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
