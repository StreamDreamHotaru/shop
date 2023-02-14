import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/views/mouth/index.vue'),
    children: [
      {
        path: '/home',
        name: '/home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/classify',
        name: '/classify',
        component: () => import('@/views/classify/index.vue')
      },
      {
        path: '/cart',
        name: '/cart',
        component: () => import('@/views/cart/index.vue')
      },
      {
        path: '/mine',
        name: '/mine',
        component: () => import('@/views/mine/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
