const Book = require('../models/book');
const multer = require("multer");

// Configuração do multer para upload de imagens
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limite de tamanho do arquivo (5MB)
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error('Tipo de arquivo inválido. Apenas imagens JPEG, PNG ou JPG são permitidas.'));
    }
    cb(null, true);
  }
});

// Criar um novo livro com capa
exports.createBook = async (req, res) => {
  try {
    const { titulo, autor, ano } = req.body;
    const capa = req.file ? req.file.buffer.toString("base64") : null; // Converte a imagem para Base64

    const newBook = new Book({
      titulo: titulo,
      autor: autor,
      ano: ano,
      cover: req.file ? req.file.buffer.toString("base64") : null,  // Caminho do arquivo ou outra forma de salvar a capa
    });
    await newBook.save();

    res.status(201).json({ message: 'Livro criado com sucesso!', book: newBook });
  } catch (error) {
    
    res.status(500).json({ message: 'Erro ao criar livro', error });
  }
};

// Obter todos os livros
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar livros', error });
  }
};

// Atualizar um livro com capa
exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, autor, ano } = req.body;
    const capa = req.file ? req.file.buffer.toString("base64") : undefined;

    const updatedData = { titulo, autor, ano };
    if (capa) updatedData.capa = capa;

    const updatedBook = await Book.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ message: 'Livro não encontrado' });
    }

    res.status(200).json({ message: 'Livro atualizado com sucesso!', book: updatedBook });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar livro', error });
  }
};

// Deletar um livro
exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: 'Livro não encontrado' });
    }

    res.status(200).json({ message: 'Livro removido com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover livro', error });
  }
};

// Exportar configuração do multer para rotas
exports.upload = upload.single('capa');
