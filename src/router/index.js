import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView'
import store from '../store'

const routes = [
  {
    path: `/`,
    name: `Main`,
    component: MainView,
    meta: {
      layout: 'Main',
      auth: true,
      path: 'main'
    }
  },
  {
    path: `/login`,
    name: `Login`,
    component: () => import('../views/AuthView'),
    meta: {
      layout: 'Auth',
      auth: false,
      path: 'login'
    }
  },
  {
    path: `/profile`,
    name: `Profile`,
    component: () => import('../views/ProfileView'),
    meta: {
      layout: 'Main',
      auth: true,
      path: 'main profile'
    }
  },
  {
    path: `/tickets`,
    name: `Tickets`,
    component: MainView,
    meta: {
      layout: 'Main',
      auth: true,
      path: 'main tickets'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

async function beforeEach(to, from, next) {
  const authRequired = to.meta.auth
  const hasToken = store.getters['auth/hasToken']
  const path = to.meta.path
  store.dispatch('changePath', path)
  if (authRequired && hasToken) {
    next()
  } else if (authRequired && !hasToken) {
    next({ name: `Login` })
  } else {
    next()
  }
}

router.beforeEach(beforeEach)

export default router