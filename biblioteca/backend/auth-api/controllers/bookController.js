const Book = require('../models/book');
const multer = require("multer");

// Configuração do multer para upload de imagens
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Defina o diretório onde os arquivos serão salvos
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
 
// Middleware do multer
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
 
    if (mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Formato de arquivo inválido. Apenas JPEG e PNG são permitidos."));
    }
  },
  limits: { fileSize: 1024 * 1024 * 2 }, // Limite de 2MB
});
// Criar um novo livro com capa
exports.createBook = async (req, res) => {
  try {
    const { titulo, autor, ano } = req.body;
    const capa =req.file.path  ? req.file.path : req.file
    const newBook = new Book({
      titulo: titulo,
      autor: autor,
      ano: ano,
      capa: capa
    });
    await newBook.save();

    res.status(201).json({ message: 'Livro criado com sucesso!', book: newBook });
  } catch (error) {
    console.log(error);
    
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
