const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

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

usuarioSchema.pre('save', async function (next) {
  const user = this;

  user.senha = await bcryptjs.hash(user.senha, 8);
  console.log(user.senha);

  next();
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
