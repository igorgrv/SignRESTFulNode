const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


const usuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, 'Necessário informar um nome'],
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    unique: true,
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

usuarioSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, 'accenture');
  return token;
};

usuarioSchema.statics.findByEmail = async (email) => {
  const usuario = await Usuario.findOne({ email });

  return usuario;
}

usuarioSchema.statics.findByCredentials = async (email, senha) => {
  const usuario = await Usuario.findOne({ email });
  if (!usuario) throw new Error('Usuário e/ou senha inválidos');

  const isMatch = await bcryptjs.compare(senha, usuario.senha);
  if (!isMatch) throw new Error('Usuário e/ou senha inválidos');

  return usuario;
};

usuarioSchema.pre('save', async function (next) {
  const user = this;

  user.senha = await bcryptjs.hash(user.senha, 8);
  console.log(user.senha);

  next();
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
