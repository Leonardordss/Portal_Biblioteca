const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  ano: { type: Number, required: true },
  capa: { type: String, required: false },  // Campo para armazenar a capa do livro (imagem em Base64)
});

module.exports = mongoose.model('Book', bookSchema);

