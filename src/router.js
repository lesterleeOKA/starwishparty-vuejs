// src/router.js
import { createRouter, createWebHistory, createWebHashHistory  } from 'vue-router';
import LoginPage from './components/LoginPage.vue';
import Container from './components/Container.vue';
import GameComponent from './components/GameComponent.vue';
import Menu from './components/Menu.vue';

const routes = [
  /*{ path: '/', name: 'Login', component: LoginPage },
  { path: '/menu', name: 'Menu', component: Menu },
  { path: '/demo', name: 'DemoPage', component: Container },*/
  { path: '/', name: 'DemoPage', component: Container },
  {
    path: '/game',
    name: 'Game',
    component: GameComponent,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
