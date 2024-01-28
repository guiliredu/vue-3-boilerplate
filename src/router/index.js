import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

function loadView(view) {
  return () => import(`../views/${view}.vue`);
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/entrar', name: 'login', component: loadView('Login'), meta: { auth: false } },
    { path: '/', name: 'home', component: loadView('Home'), meta: { auth: false } },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    const auth = useAuthStore()
    if (!auth.token) {
      next({
        path: '/entrar',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  }

  next() // make sure to always call next()!
})

export default router
