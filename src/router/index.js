import Home from '@/components/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:id/information',
      name: 'info',
      component: () => import('../components/RecipeInfo.vue'),
    }
  ]
})

export default router
