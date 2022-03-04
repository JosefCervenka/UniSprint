import { createRouter, createWebHistory } from 'vue-router'
import Home  from "../components/Home"
import Sprints from "../components/Sprints"
import Stories from "../components/Stories"
import Teams from "../components/Teams"
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Sprints',
    name: 'Sprints',
    component: Sprints
  },
  {
    path: '/Stories',
    name: 'Stories',
    component: Stories
  },
  {
    path: '/Teams',
    name: 'Teams',
    component: Teams
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
