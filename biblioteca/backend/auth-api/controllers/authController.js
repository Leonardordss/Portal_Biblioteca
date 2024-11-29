const User = require('../models/user');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

// Função para registrar novos usuários
exports.register = async (req, res) => {
const { username, password } = req.body;
    try {
          // Criptografa a senha antes de salvar no banco
        const hashedPassword = await bcrypt.hash(password, 10);
   
        // Cria um novo usuário
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'Usuário registrado com sucesso' });
    } catch (error) {
        console.error(error); // Loga o erro
        res.status(500).json({ error: 'Erro ao registrar usuário' });
    }
};

// Função para fazer login de usuários
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Busca usuário pelo nome
        const user = await User.findOne({ username });
        if (!user) {
            console.log('Usuário não encontrado');
            return res.status(400).json({ error: 'Usuário não encontrado' });
        }

        // Compara a senha fornecida com a senha armazenada
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({error: 'Senha incorreta' });

        // Cria web token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            
    res.json({ token });
        
    } catch (error) {
        console.error(error); // Loga o erro
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
    };