import AboutView from 'views/About/AboutView';
import HomeView from 'views/Home/HomeView';

import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    { path: '/', component: HomeView, name: 'Home' },
    { path: '/about', component: AboutView, name: 'About' },
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  });

export default router; 