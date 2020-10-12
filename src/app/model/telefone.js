const mongoose = require('mongoose');

const Telefone = mongoose.model('Telefone', {
  numero: {
    type: Number,
    required: true,
    trim: true,
    lowercase: true,
  },
  ddd: {
    type: Number,
    required: true,
    trim: true,
    lowercase: true,
  },
});

module.exports = Telefone;