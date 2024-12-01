// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Login from '../views/Login.vue'; // Certifique-se de que o caminho esteja correto
import Register from '../views/Register.vue';
import Dashboard from '../views/Dashboard.vue';
import Cadastro from '../pages/Cadastro.vue';
import Catalogo from '../pages/Catalogo.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register', // Nova rota para registro
    name: 'Register',
    component: Register,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/cadastro', // Rota para Cadastro.vue
    name: 'Cadastro',
    component: Cadastro,
  },
  {
    path: '/catalogo',
    name: 'Catalogo',
    component: Catalogo,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/login',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('token');
  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;
