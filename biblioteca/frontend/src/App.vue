<template>
  <div id="app">

    <Header />
    <Home />
    <Footer />
    <Login />
    <Dashboard />


  </div>
</template>


<script>
import './styles/global.css';

import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer.vue';
import Login from './views/Login';
import Dashboard from './views/Dashboard';

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Footer,
    Login,
    Dashboard
  }
}
</script>


