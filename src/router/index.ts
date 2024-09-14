import {  createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/TemporalView.vue'
import AboutView from '../pages/LuxonView.vue'
import DateView from '../pages/DateView.vue'


const routes = [
  { path: '/', component: HomeView },
  { path: '/luxon', component: AboutView },
  { path: '/date', component: DateView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router