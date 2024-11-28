
import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue'; // Componente Login


Vue.use(VueRouter);


const routes = [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/Dashboard.vue'),
      meta: {requiresAuth: true},
    },
    {
      path: '*',
      redirect: '/login', // Adicione a rota para o Cadastro
    },
  ];

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  });

  router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('tokens');
    if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
        next('/login');
  } else {
    next();
  }
});

export default router;