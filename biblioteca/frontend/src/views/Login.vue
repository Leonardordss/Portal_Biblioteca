<template>
    <div class="login-container">
      <div class="login">
        <h1>Login</h1>
        <form @submit.prevent="loginUser">
          <div>
            <label>Nome</label>
            <input v-model="username" type="text" required />
          </div>
          <div>
            <label>Senha</label>
            <input v-model="password" type="password" required />
          </div>
          <button type="submit">Entrar</button>
          <p v-if="message">{{ message }}</p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import api from '../axios';
  
  export default {
    name: 'AppLogin',
    data() {
      return {
        username: '',
        password: '',
        message: '',
      };
    },
    methods: {
      async loginUser() {
        try {
          const response = await api.post('/api/auth/login', {
            username: this.username,
            password: this.password,
          });
          this.message = 'Login bem-sucedido!';
          localStorage.setItem('token', response.data.token);
          this.$router.push('./Dashboard');
        } catch (error) {
             // Logando o erro completo para diagnosticar
    console.error('Erro ao fazer login:', error.response);
          this.message =
            error.response && error.response.data && error.response.data.message
              ? error.response.data.message
              : 'Erro ao fazer login.';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Container principal que ocupa toda a tela */
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 120px);
    padding: 0 20px; /* Adiciona espaçamento nas laterais em telas pequenas */
    box-sizing: border-box;
    flex-direction: column; /* Coloca os elementos de forma vertical */
  }
  
  /* Formulário de Login */
  .login {
    background-color: var(--color-background-home);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 400px; /* Limita a largura máxima do formulário */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }
  
  /* Estilos dos campos de entrada */
  .login input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border-radius: 4px;
    border: 1px solid #ddd;
    margin-bottom: 15px;
  }
  
  /* Estilo do botão de submit */
  .login button {
    width: 100%;
    padding: 10px;
    background-color: var(--color-button);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 4px;
  }
  
  /* Exibição da mensagem de erro ou sucesso */
  .login p {
    color: red;
    margin-top: 20px;
    text-align: center;
  }
  
  /* Responsividade */
  @media (max-width: 600px) {
    .login {
      padding: 15px;
    }
  }
  </style>
  