<template>
    <main>
        <div class="login">
            <h1>Login</h1>
            <form @submit.prevent="loginUser"></form>
            <div>
                <label>Nome</label>
                <input v-model="nome" type="nome" required />
            </div>
            <div>
                <label>Senha</label>
                <input v-model="password" type="password" required />
            </div>
            <form>
                <p v-if="message">{{message}}</p>
            </form>
        </div> 
    </main>
</template>

<script>
import api from '../axios';

export default {
    name: 'AppLogin',
    data() {
        return {
            nome: '',
            password: '',
            message: '',
        };
    },
    methods: {
        async loginUser() {
            try {
                const response = await api.post('/auth/login', {
                    nome: this.nome,
                    password: this.password,
                });
                this.message = 'Login bem-sucedido!';
                localStorage.setItem('token', response.data.token);
                this.$router.push('./Dashboard');
            } catch (error) {
                this.message = error.response && error.response.data && error.response.data.message
                ? error.message.data.message
                : 'Erro ao fazer login.';
            }
        },
    },
};

</script>

<style scoped>

main{
    background-color: var(--color-background-home);
    justify-content: center;
    align-items: center;
}

.text-top{
    color: var(--color-text-light);
    font-size: 22px;
    margin-bottom: 30px;
}

</style>