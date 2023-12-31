import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

console.log ('routes', routes)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
