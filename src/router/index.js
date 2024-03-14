import { createRouter, createWebHistory } from 'vue-router'
import ArquivosDiarios from '../views/ArquivosDiarios.vue'
const routes = [
  {
    path: '/',
    name: 'ArquivosDiarios',
    component: ArquivosDiarios
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
