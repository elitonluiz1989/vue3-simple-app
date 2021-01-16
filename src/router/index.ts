import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import { useLocalizedText } from '@/hooks/useTranslator';

import HomeScreen from '@/screens/HomeScreen.vue';
import ActivitiesScreen from '@/screens/ActivitiesScreen.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: useLocalizedText('home.route'),
    name: useLocalizedText('home.title'),
    component: HomeScreen
  },
  {
    path: useLocalizedText('activities.route'),
    name: useLocalizedText('activities.title'),
    component: ActivitiesScreen
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;