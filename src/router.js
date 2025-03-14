// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue';
import Container from './components/Container.vue';

const routes = [
  { path: '/', name: 'DemoPage', component: Container }
  /*{ path: '/', name: 'Login', component: LoginPage },
  { path: '/demo', name: 'DemoPage', component: Container }*/ // Ensure this route exists
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
