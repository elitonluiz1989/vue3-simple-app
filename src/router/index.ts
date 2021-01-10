import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import { useLocalizedText } from '@/hooks/useTranslator';

import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: useLocalizedText('home.route'),
    name: useLocalizedText('home.title'),
    component: Home
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
