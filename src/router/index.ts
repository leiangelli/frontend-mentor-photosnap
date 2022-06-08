import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/stories',
      name: 'stories',
      component: import('@/views/Stories.vue')
    },
    {
      path: '/features',
      name: 'features',
      component: import('@/views/Features.vue')
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: import('@/views/Pricing.vue')
    }
  ]
})

export default router
