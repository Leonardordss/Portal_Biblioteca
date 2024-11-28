<template>
    <div>
        <main>
            <div class="dashboard">
                <h1>Bem-vindo ao Dashboard!</h1>
                <p>Você está autenticado</p>
                <button @click="logout">Sair</button>
            </div>
        </main>
            </div>
</template>

<script>

export default {
    name: 'AppDashboard'}

export default {
    methods: {
        logout() {
            localStorage.removeItem('token');
            this.$router.push('./Login.vue')
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