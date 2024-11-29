import { createApp } from 'vue'; // Vue 3
import App from './App.vue';
import router from './router';
import api from './axios';

const app = createApp(App); // Cria a instância da aplicação

// Registrando o Axios no Vue 3
app.config.globalProperties.$http = api; // Disponibilizando o Axios globalmente

app.use(router) // Usando o Vue Router
   .mount('#app'); // Montando a aplicação no elemento com id 'app'


