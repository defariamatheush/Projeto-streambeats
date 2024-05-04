import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HomeLogged from '@/views/HomeLogged.vue'
import Lancamentos from '@/views/LancamentosView.vue'
import TiposLancamento from '@/views/TiposLancamento.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: Home
  },
  {
    path: '/Home/:code',
    name: 'HomeViewLogged',
    component: HomeLogged
  },
  {
    path: '/lancamentos',
    name: 'LancamentosView',
    component: Lancamentos
  },
  {
    path: '/lancamentos/tipos',
    name: 'TiposLancamentoView',
    component: TiposLancamento
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
