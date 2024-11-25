<template>

<footer>
    <div><p class="rodape" >Portal dos Livros é seu sistema de gerenciamento de biblioteca confiável</p>
        <p class="rodape2" >&copy; 2024 Portal dos Livros. Todos os direitos reservados.</p>
    </div>
</footer>

</template>

<script>
export default{
    name: 'AppFooter'
}

</script>

<style scoped>

footer{
    width: 100%;
    height: 60px;
    background-color: var(--color-background-nav);
    display: flex;
    justify-content: center;
    align-items: center;
}

.rodape{
    color: var(--color-text-light);
    display: flex;
    font-size: 15px;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
}

.rodape2{
    color: var(--color-text-light);
    display: flex;
    font-size: 10px;
    align-items: center;
    justify-content: center;
}

</style>