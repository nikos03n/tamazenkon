import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Servise from '../views/ServiseViews.vue'
import About from '../views/About.vue'
import Conatctq from '../views/ConatctUs.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/servise',
    name: 'Servise',
    component: Servise
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/conatctUs',
    name: 'Conatctq',
    component: Conatctq
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
