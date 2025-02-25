// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue'; // Adjust the path as necessary

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage, // Set LoginPage as the default entry point
  },
  {
    path: '/SelectGames', // Example of another route
    name: 'Game',
    component: () => import('./components/SelectGames.vue'), // Lazy load if necessary
  },
  // You can add more routes here
];

const router = createRouter({
  history: createWebHistory(), // Use history mode for clean URLs
  routes,
});

export default router;
