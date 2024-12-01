const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Rotas de livros sem autenticação
router.post('/', bookController.upload, bookController.createBook); // Criar livro
router.get('/', bookController.getBooks); // Obter todos os livros
router.put('/:id', bookController.upload, bookController.updateBook); // Atualizar livro
router.delete('/:id', bookController.deleteBook); // Deletar livro

module.exports = router;  // Exporta o roteador para ser usado em app.js



