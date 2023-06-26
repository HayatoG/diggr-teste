import { createRouter, createWebHistory } from 'vue-router'
import EmpresaView from '../views/Empresa/View.vue'
import EmpresaCriar from '../views/Empresa/Create.vue'
import EmpresaEditar from '../views/Empresa/Edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/empresa',
      name: 'empresa',
      component: EmpresaView
    },
    {
      path: '/empresa/criar',
      name: 'empresaCriar',
      component: EmpresaCriar
    },
    {
      path: '/empresas/:id',
      name: 'empresaEditar',
      component: EmpresaEditar
    }
  ]
})

export default router
