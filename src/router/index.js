import { createRouter, createWebHistory } from 'vue-router'
import ProjectHome from '../views/ProjectHome.vue'
import ProjectAdd from '../views/ProjectAdd.vue'
import ProjectEdit from '../views/ProjectEdit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProjectHome
    },
    {
      path: '/project/:id',
      name: 'project',
      component: ProjectEdit
    },
    {
      path: '/project/add',
      name: 'add',
      component: ProjectAdd
    }
  ]
})

export default router
