import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/components/HomePage.vue';
import ProductList from '@/components/ProductList.vue';
import ContactsPage from '@/components/ContactsPage.vue';
import LoginPage from '@/components/LoginPage.vue';





const routes = [
  { path: '/', component: HomePage },
  { path: '/products', component: ProductList },
  { path: '/contact', component: ContactsPage },
  { path: '/login', component: LoginPage },

  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
