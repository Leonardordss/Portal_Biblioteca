<template>
  <div id="app">
    <Header /> <!-- Componente de Cabeçalho -->
    <router-view></router-view> <!-- Exibe a view atual do roteador -->
    <Footer /> <!-- Componente de Rodapé -->
  </div>
</template>



<script>
import './styles/global.css'; // Importa o arquivo de estilo global

import Header from './components/Header'; // Importa o componente Header
import Footer from './components/Footer.vue'; // Importa o componente Footer

export default {
  name: 'App', // Nome do componente
  components: {
    Header, // Registra o componente Header
    Footer // Registra o componente Footer
  }
}
</script>



