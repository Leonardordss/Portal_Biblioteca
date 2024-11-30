const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Cria índice para garantir que 'username' seja único
userSchema.index({ username: 1 }, { unique: true });

module.exports = mongoose.model('User', userSchema);
