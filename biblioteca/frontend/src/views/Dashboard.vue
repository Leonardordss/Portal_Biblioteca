<template>
    <div>
        
            <div class="dashboard">
                <h1>Bem-vindo ao Dashboard!</h1>
                <p>Você está autenticado</p>
                <button @click="logout">Sair</button>
            </div>
        
            </div>
</template>

<script>

export default {
    name: 'AppDashboard',
    methods: {
        logout() {
            localStorage.removeItem('token');
            this.$router.push('./Login.vue');
        }
    }
};

</script>

<style scoped>



</style>