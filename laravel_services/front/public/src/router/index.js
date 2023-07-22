import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {useAuthStore} from "@/stores/auth.store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public.home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/socket',
      name: 'socket',
      component: () => import('@/views/SocketView.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: {auth: true}, // На єту страницу нельзя ходить без логина
      component: () => import('@/views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {

  const authStore = useAuthStore()

  // Если я пришел на страницу логина - то иду дальше
  if(to.fullPath === '/login') {
    next()
  }

  if(to.matched.some((record) => record.meta.auth) && !authStore.isLogin) {
    next('login')
  } else {
    next()
  }

});

export default router
