<template>
    <!-- Seção Sobre -->
    <div class="text-top1">
      <h1>Sobre o Portal dos Livros</h1>
      <p>Bem-vindo ao <strong>Portal dos Livros</strong>, onde cada livro é uma jornada.</p>
      <p>Aqui, oferecemos uma vasta coleção de títulos que prometem transportar você para diferentes mundos, épocas e perspectivas. 
        Nosso objetivo é proporcionar uma experiência única de leitura, conectando leitores apaixonados com histórias que tocam o coração e a mente.
        No <strong>Portal dos Livros</strong>, acreditamos que a leitura é a chave para a transformação pessoal e o crescimento, e queremos ser o seu guia nessa jornada.
      </p>
      <p>
        Junte-se a nós e descubra o poder de uma boa história, porque cada livro é uma jornada esperando para ser vivida.
      </p>
    </div>
  
    <!-- Seção de Contatos -->
    <div class="text-top2">
      <h2>Entre em Contato</h2>
      <div class="contatos">
        <p>Telefone: +55 (11) 1234-5678</p>
        <p>Endereço: Rua das Letras, 123 - São Paulo, SP</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SobrePage'
  }
  </script>
  
  <style scoped>
  /* Seção Sobre */
  .text-top1 {
    background-color: var(--color-background-nav);
    color: var(--color-text-light);
    background-color: var(--color-background-home);

    padding: 20px;  /* Padding para dar mais espaço interno */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;  /* Alinha os elementos no topo */
    align-items: center;  /* Alinha o conteúdo horizontalmente */
    text-align: center;  /* Centraliza o texto */
    height: auto;  /* Não precisa de altura fixa */

    margin-bottom: 5px;  /* Espaço entre as seções */
    height: calc(80vh - 120px);
  }
  
  .text-top1 p {
    margin-bottom: 12px;  /* Menor espaçamento entre os parágrafos */
    line-height: 1.4;  /* Compacta as linhas */
    max-width: 750px;  /* Controla a largura do parágrafo */
    font-size: 15px;  /* Tamanho de fonte reduzido */
  }
  
  .text-top1 h1 {
    margin-bottom: 10px;  /* Espaço abaixo do título */
    font-size: 24px;  /* Tamanho de fonte do título */
  }
  
  .text-top1 h2 {
    margin-bottom: 10px;
    font-size: 20px;  /* Tamanho de fonte do subtítulo */
  }
  
  /* Seção de Contatos */
  .text-top2 {
    background-color: var(--color-background-nav);
    color: var(--color-text-light);
    background-color: var(--color-background-home);
    margin-bottom: 5px;
    padding: 20px;  /* Padding para conteúdo */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;  /* Alinha os elementos no topo */
    align-items: center;  /* Alinha o conteúdo horizontalmente */
    text-align: center;  /* Centraliza o texto */

  }
  
  .contatos p {
    margin-bottom: 35px;  /* Menor espaço entre as linhas de contato */
    font-size: 15px;  /* Tamanho do texto de contato */
    line-height: 1.5;  /* Aumenta a altura da linha */
  }
  
  /* Responsividade para telas maiores */
  @media (min-width: 700px) {
    .text-top1 h1 {
      font-size: 28px;  /* Título maior em telas grandes */
    }
  
    .text-top1 h2 {
      font-size: 22px;  /* Subtítulo maior em telas grandes */
    }
  
    .text-top1 p {
      font-size: 16px;  /* Tamanho de fonte ajustado em telas grandes */
    }
  
    .text-top2 h2 {
      font-size: 24px;  /* Tamanho de subtítulo ajustado */
    }
  
    .contatos p {
      font-size: 16px;  /* Tamanho do texto de contato ajustado */
    }
  }
  </style>
  