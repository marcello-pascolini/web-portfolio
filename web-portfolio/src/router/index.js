import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from  '../views/About.vue'
import Skill from  '../views/Skill.vue'
import Contact from  '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/skill',
      name: 'skill',
      component: Skill
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})

export default router
