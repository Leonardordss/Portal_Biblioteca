<template>
    <div class="register-container">
      <div class="register">
        <h1>Criar Conta</h1>
        <form @submit.prevent="registerUser">
          <div>
            <label>Nome</label>
            <input v-model="username" type="text" required />
          </div>
          <div>
            <label>Senha</label>
            <input v-model="password" type="password" required />
          </div>
          <button type="submit">Criar Conta</button>
          <p v-if="message">{{ message }}</p>
        </form>
  
        <p>Já tem uma conta? <router-link to="/login">Faça login aqui</router-link></p>
      </div>
    </div>
  </template>
  
  <script>
  import api from 'axios';
  
  export default {
    name: 'AppRegister',
    data() {
      return {
        username: '',
        password: '',
        message: '',
      };
    },
    methods: {
      // Método para registrar um novo usuário
      async registerUser() {
        try {
          const response = await api.post('http://localhost:5000/api/auth/register', {
            username: this.username,
            password: this.password,
          });
          this.message = response.data.message || 'Conta criada com sucesso!';
          this.$router.push('/login'); // Redireciona para a página de login
        } catch (error) {
          console.error('Erro ao criar conta:', error.response);
          this.message =
            error.response && error.response.data && error.response.data.message
              ? error.response.data.message
              : 'Erro ao criar conta.';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Container principal que ocupa toda a tela */
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 120px);
    padding: 0 20px; /* Adiciona espaçamento nas laterais em telas pequenas */
    box-sizing: border-box;
    flex-direction: column; /* Coloca os elementos de forma vertical */
  }

  /* Formulário de Registro */
  .register {
    background-color: var(--color-background-home);
    color: var(--color-text-light);
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
  .register input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border-radius: 4px;
    border: 1px solid #ddd;
    margin-bottom: 15px;
  }

  /* Estilo do botão de submit */
  .register button {
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
  .register p {
    color: white;
    margin-top: 20px;
    text-align: center;
  }

  /* Responsividade */
  @media (max-width: 600px) {
    .register {
      padding: 15px;
    }
  }
</style>
