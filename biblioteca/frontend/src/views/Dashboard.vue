<template>
    <div>
      <div class="dashboard">
        <h1 class="text-top">Bem-vindo ao Dashboard!</h1>
        <p class="text-top">Você está autenticado</p>
        <button @click="logout">Sair</button>
  
        <!-- Botão para redirecionar para a página de cadastro de livros -->
        <router-link to="/cadastro">
          <button class="btn-cadastro">Ir para Cadastro</button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  // views/Dashboard.vue
  export default {
    name: 'AppDashboard',
    methods: {
      logout() {
        localStorage.removeItem('token'); // Remove o token do localStorage
        this.$router.push('/login'); // Redireciona para a página de login
      }
    }
  };
  </script>
  
  <style scoped>
  .dashboard {
    background-color: var(--color-background-home);
    justify-content: center;
    align-items: center;
    height: calc(100vh - 120px);
  }
  
  .text-top {
    color: var(--color-text-light);
    font-size: 22px;
    margin-bottom: 30px;
  }
  
  .btn-cadastro {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: var(--color-button);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    width: 200px;
  }
  
  .btn-cadastro:hover {
    background-color: var(--color-button-hover);
  }
  
  @media (min-width: 700px) {
    #livro1 {
      width: 200px;
    }
    #livro2 {
      width: 200px;
    }
  }
  </style>
  