<template>
    <header>
        <nav class="container">
            <a href="/" id="logo"><img src="../assets/logo.jpg" /></a>

            <img v-on:click="openMenu" alt="Abrir menu" id="menu-button" src="../assets/menu.svg">

            <div v-on:click="closeMenu" id="menu-overlay" v-if="menuActive"></div>

            <div id="menu-itens" :class="{active:menuActive}">

                <img src="../assets/logo.jpg" id="menu-logo">

                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/catalogo">Catálogo</a></li>
                    <li><a href="/contato">Contato</a></li>
                </ul>
            </div>

        </nav>
    </header>
</template>

<script>
export default{
    name: 'AppHeader',
    data(){
        return{
            menuActive: false
        }
    },
    methods:{
        openMenu: function(){
            this.menuActive = true;
        },
        closeMenu: function(){
            this.menuActive = false;
    }
}
}
</script>

<style scoped>

header{
    background-color: var(--color-background-nav);
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav{
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;
}

#logo img{
    width: 90px;
}

#menu-button{
    width: 38px;


}

#menu-overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background-color: #000000;
    opacity: 0.8;
}

#menu-logo{
    width: 110px;
    margin-top: 30px;
    margin-bottom: 10px;
}

#menu-itens{
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--color-background-nav);
    width: 60%;
    height: 100vh;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

#menu-itens.active{
    display: flex;
}

ul{
    list-style: none;
    text-align: center;
}

ul li{
    margin: 20px 0px;
}

ul li a{
    color: var(--color-text-light);
}

@media (min-width:788px){
    #menu-button,
    #menu-logo,
    #menu-overlay{
        display: none;
    }

#menu-itens{
    display: flex;
    position: static;
    height: 60px;
    width: auto;
}

ul{
    display: flex;
    height: 60px;
    align-items: center;
}

ul li{
    margin: 0;
    margin-left: 20px;
}
}

</style>