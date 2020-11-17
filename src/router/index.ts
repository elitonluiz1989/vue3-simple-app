import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import { useTranslate } from '@/hooks/useTranslate';

import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: useTranslate('app.screens.home'),
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
