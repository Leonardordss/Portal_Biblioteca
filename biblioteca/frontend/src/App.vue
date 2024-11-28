<template>
  <div id="app">

    <Header />
    <Home />
    <Footer />
    <Login />


  </div>
</template>


<script>
import './styles/global.css';

import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer.vue';
import Login from './views/Login';

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Footer,
    Login
  }
}
</script>
