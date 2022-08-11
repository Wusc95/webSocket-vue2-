import Vue from 'vue'
import VueRouter from 'vue-router'
import chartView from '../views/chart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'chart',
    component: chartView
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/login.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
