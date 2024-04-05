import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Gerenciadordeplaylists from '../views/Gerenciadordeplaylists.vue'
const routes = [
  {
    path: '/home',
    name: 'HomeView',
    component: Home
  },
  {
    path: '/gerenciarplaylists',
    name: 'Gerenciadordeplaylists',
    component: Gerenciadordeplaylists
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
