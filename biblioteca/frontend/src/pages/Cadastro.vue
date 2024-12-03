<template>
  <div class="login-container">
    <div class="login">
      <h1>Cadastro de Livro</h1>

      <!-- Formulário de Adição de Livro -->
      <form @submit.prevent="addBook">
        <div>
          <label>Título</label>
          <input
            v-model="newBook.titulo"
            type="text"
            placeholder="Digite o título"
            required
          />
        </div>
        <div>
          <label>Autor</label>
          <input
            v-model="newBook.autor"
            type="text"
            placeholder="Digite o autor"
            required
          />
        </div>
        <div>
          <label>Ano</label>
          <input
            v-model="newBook.ano"
            type="number"
            placeholder="Digite o ano"
            required
          />
        </div>
        <div>
          <label>Capa do Livro</label>
          <input
            type="file"
            @change="handleImageUpload"
            accept="image/*"
            required
          />
        </div>
        <button type="submit">Adicionar Livro</button>
      </form>
    </div>

    <!-- Lista de Livros -->
    <div class="book-list">
      <h2>Livros Cadastrados</h2>
      <div v-if="books.length === 0">Nenhum livro cadastrado.</div>
      <ul v-if="books.length > 0">
        <li v-for="book in books" :key="book._id">
          <div>
            <h3>{{ book.titulo }}</h3>
            <p>Autor: {{ book.autor }}</p>
            <p>Ano: {{ book.ano }}</p>
            <button @click="editBook(book)">Atualizar</button>
            <button @click="deleteBook(book._id)">Deletar</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CadastroLivro",
  data() {
    return {
      newBook: { titulo: "", autor: "", ano: "", capa: "" }, // Novo livro com imagem
      books: [], // Lista de livros cadastrados
    };
  },
  created() {
    this.fetchBooks(); // Carregar livros ao inicializar o componente
  },
  methods: {
    // Manipula o upload da imagem da capa
    handleImageUpload(event) {
      this.newBook.capa = event.target.files[0];
     
    },
    // Adicionar livro e enviar para o backend
    async addBook() {
      try {
        // Cria o FormData para enviar a capa e os dados do livro
        const formData = new FormData();
        formData.append("titulo", this.newBook.titulo);
        formData.append("autor", this.newBook.autor);
        formData.append("ano", this.newBook.ano);
        formData.append("capa", this.newBook.capa); // Adiciona a imagem da capa
      
        // Envia os dados para o backend
        await axios.post("http://localhost:5000/api/books", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Necessário para enviar arquivos
          },
        });

        // Limpa o formulário após o envio
        this.resetForm();
        alert("Livro cadastrado com sucesso!");
        this.fetchBooks(); // Recarregar a lista de livros
      } catch (error) {
        console.error("Erro ao cadastrar livro:", error);
        alert("Falha ao cadastrar o livro. Tente novamente.");
      }
    },
    // Resetar formulário
    resetForm() {
      this.newBook = { titulo: "", autor: "", ano: "", capa: "" }; // Novo livro com imagem
    },
    // Carregar todos os livros cadastrados
    async fetchBooks() {
      try {
        const response = await axios.get("http://localhost:5000/api/books");
        this.books = response.data; // Atualiza a lista de livros
      } catch (error) {
        console.error("Erro ao carregar livros:", error);
      }
    },
    // Editar um livro (Abrir formulário de edição, se necessário)
    editBook(book) {
      this.newBook = { ...book }; // Preenche o formulário com os dados do livro
    },
    // Deletar um livro
    async deleteBook(bookId) {
      try {
        await axios.delete(`http://localhost:5000/api/books/${bookId}`);
        alert("Livro deletado com sucesso!");
        this.fetchBooks(); // Recarregar a lista de livros
      } catch (error) {
        console.error("Erro ao deletar livro:", error);
        alert("Falha ao deletar o livro. Tente novamente.");
      }
    },
  },
};
</script>

<style scoped>
/* Estilização da página de cadastro */
.login-container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start; /* Alinha o conteúdo ao topo */
  height: calc(100vh - 120px);
  padding: 0 20px;
  box-sizing: border-box;
  flex-direction: row;
  background-color: var(--color-background);
  overflow: hidden; /* Evita que a área exceda o tamanho da tela */
}

.login {
  background-color: var(--color-background-home);
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Alinha o conteúdo ao topo */
  align-items: center;
  width: 50%;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  color: var(--color-text-light);
  max-height: 100%; /* Garante que o conteúdo não ultrapasse a altura disponível */
}

.book-list {
  width: 50%;
  padding-left: 20px;
  max-height: 100%; /* Garante que a lista de livros não ultrapasse o limite da tela */
  overflow-y: auto; /* Permite rolagem quando houver muitos livros */
}

.book-list h2 {
  color: #000; /* Cor preta para o título da lista de livros */
}

.book-list ul {
  list-style: none;
  padding: 0;
}

.book-list ul li {
  background-color: #f8f8f8;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  color: #000; /* Cor preta para o texto dos livros */
}

.book-list ul li div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.book-list ul li button {
  background-color: #ff6347;
  color: #fff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 10px;
}

.book-list ul li button:hover {
  background-color: #e53e3e;
}

.login input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 15px;
}

.login button {
  width: 100%;
  padding: 10px;
  background-color: var(--color-text-title);
  color: var(--color-text-light);
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
}

.login button:hover {
  opacity: 0.9;
}

.login label {
  color: var(--color-text-light);
  font-size: 14px;
  margin-bottom: 5px;
}

/* Responsividade */
@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
  }

  .login,
  .book-list {
    width: 100%;
    padding-left: 0;
  }
}
</style>
