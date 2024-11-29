const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': { // Defina o contexto da rota que você quer redirecionar
        target: 'https://localhost:5000', // URL do seu backend
        changeOrigin: true, // Modifica o cabeçalho de origem da requisição
        secure: false, // Permite conexões com certificados SSL autoassinados
      },
    },
  },
});
