<template>

<Main>

    <div class="text-top">Livros em <b>Destaque</b></div>
    
    <a>
    <img src="../assets/livro1.jpg" alt="Livros em Destaque" id="livro1">
    <img src="../assets/livro2.jpg" alt="Livros em Destaque" id="livro2">

    </a>


</Main>

</template>

<script>

export default{
    name: 'AppHome'
}

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

#livro1{
    width: 150px;
    margin-right: 30px;
}

#livro2{
    width: 150px;
    margin-left: 30px;
}

@media (min-width: 700px){
    #livro1{
        width: 300px;
    }
    #livro2{
        width: 300px;
    }
}

</style>