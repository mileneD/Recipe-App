import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import RecipeInfo from '@/components/RecipeInfo.vue'
import CallBack from '@/views/CallBack.vue'
import Profile from '@/views/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/recipe/:id',
    name: 'info',
    component: RecipeInfo,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/callback',
    name: 'callback',
    component: CallBack,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
