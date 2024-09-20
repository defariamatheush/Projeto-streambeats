import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HomeLogged from '@/views/HomeLogged.vue'
import Lancamentos from '@/views/LancamentosView.vue'
import TiposLancamento from '@/views/TiposLancamento.vue'
import FluxoDeCaixaScreen from '@/views/Financeiro/Fluxo-de-caixa/FluxoDeCaixaScreen.vue'
import Perfil from '@/views/perfil/PerfilScreen.vue'
import PlanosScreen from '@/views/Planos/PlanosScreen.vue'
const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: Home
  },
  {
    path: '/monetizacao/planos',
    name: 'PlanosScreen',
    component: PlanosScreen
  },
  {
    path: '/perfil',
    component: Perfil
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
    path: '/perfil',
    name: 'LancamentosView',
    component: Lancamentos
  },
  {
    path: '/lancamentos/tipos',
    name: 'TiposLancamentoView',
    component: TiposLancamento
  },
  {
    path:'/financeiro/fluxo-de-caixa',
    name: 'FluxoDeCaixa',
    component: FluxoDeCaixaScreen
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
