// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import api from './services/api'; // Corrigido o caminho do import

const app = createApp(App);

// Registrando o Axios globalmente
app.config.globalProperties.$http = api;

app.use(router)
   .mount('#app');



