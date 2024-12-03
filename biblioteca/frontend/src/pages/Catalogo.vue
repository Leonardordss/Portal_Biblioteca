<template>
    <div class="catalog-container">
      <h1>Catálogo de Livros</h1>
      <div class="carousel">
        <button @click="prevBook" class="nav-btn">◀</button>
        <div class="book-display">
          <div v-if="books.length" class="book-card">
            <img :src="'http://localhost:5000/' + books[currentIndex].capa" alt="Capa do Livro" class="book-cover" /> -->
            <h2>{{ books[currentIndex].titulo }}</h2>
            <p>{{ books[currentIndex].autor }}</p>
            <p>{{ books[currentIndex].ano }}</p>
          </div>
          <div v-else>
            <p>Nenhum livro cadastrado ainda.</p>
          </div>
        </div>
        <button @click="nextBook" class="nav-btn">▶</button>
      </div>
    </div>
  </template>
  
  <script>
  import api from "../services/api";
  
  export default {
    name: 'AppCatalogo',
    data() {
      return {
        books: [],
        currentIndex: 0,
      };
    },
    async created() {
      await this.fetchBooks();
    },
    methods: {
      async fetchBooks() {
        try {
          const response = await api.get("/books");
          this.books = response.data;
        } catch (error) {
          console.error("Erro ao buscar livros:", error);
        }
      },
      nextBook() {
        if (this.books.length > 0) {
          this.currentIndex = (this.currentIndex + 1) % this.books.length;
        }
      },
      prevBook() {
        if (this.books.length > 0) {
          this.currentIndex =
            (this.currentIndex - 1 + this.books.length) % this.books.length;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .catalog-container {
    height: calc(100vh - 120px);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-background);
    padding: 20px;
  }
  
  .catalog-container h1 {
    color: var(--color-text-title);
    margin-bottom: 20px;
  }
  
  .carousel {
    display: flex;
    align-items: center;
  }
  
  .nav-btn {
    background-color: var(--color-background-home);
    color: var(--color-text-light);
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 20px;
    border-radius: 5px;
  }
  
  .nav-btn:hover {
    opacity: 0.8;
  }
  
  .book-display {
    text-align: center;
    padding: 20px;
    background-color: var(--color-background-nav);
    border-radius: 10px;
    color: var(--color-text-light);
  }
  
  .book-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .book-cover {
    width: 200px;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .book-card h2 {
    font-size: 20px;
    color: var(--color-text-title);
  }
  
  .book-card p {
    color: var(--color-text-light);
  }

  @media (max-width: 768px) {
    .book-cover {
    width: 150px;
    height: 225px;

  }
  .book-card h2 {
    font-size: 18px;
  }

  .book-card p {
    font-size: 14px;
  }
}
  </style>
  
  