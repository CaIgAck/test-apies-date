import {  createRouter, createWebHistory } from 'vue-router'

import TemporalView from '../pages/TemporalView.vue'
import AboutView from '../pages/LuxonView.vue'
import DateView from '../pages/DateView.vue'
import HomeView from '../pages/HomeView.vue'


const routes = [
  { path: '/', component: HomeView },
  { path: '/temporal', component: TemporalView },
  { path: '/luxon', component: AboutView },
  { path: '/date', component: DateView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router