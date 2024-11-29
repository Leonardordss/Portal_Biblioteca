import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Login from '../views/Login.vue'; // Componente Login
import Dashboard from '../views/Dashboard.vue'; // Componente Dashboard

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
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }, // Rota protegida
  },
  {
    path: '/:catchAll(.*)', // Rota de "catch-all" para redirecionamento
    redirect: '/login', // Redireciona para Login se a rota não for encontrada
  },
];

// Criar o router com createRouter
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Usar o histórico para URLs limpas
  routes, // Definir as rotas
});

// Guard para verificar autenticação
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('tokens'); // Verifica se existe o token no localStorage
  // Se a rota requer autenticação e o token não está presente, redireciona para login
  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    next('/login'); 
  } else {
    next(); // Se o usuário estiver logado ou a rota não exigir autenticação, segue normalmente
  }
});

export default router;


