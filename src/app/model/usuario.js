const mongoose = require('mongoose');
const validator = require('validator');

const usuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, 'Necessário informar um nome'],
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, 'Necessário informar um email'],
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email invalido');
      }
    },
  },
  senha: {
    type: String,
    required: [true, 'Necessário informar uma senha'],
    validate(value) {
      if (value < 0) {
        throw new Error('senha invalida');
      }
    },
  },
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
