import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import DayPlan from './components/DayPlan.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dia/:id',
    name: 'DayPlan',
    component: DayPlan,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router