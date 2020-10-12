const mongoose = require('mongoose');

const url = 'mongodb+srv://igor-accenture:accenture@usersign.pr5k3.mongodb.net/UserSign?retryWrites=true&w=majority';
// const url = 'mongodb://127.0.0.1:27017/UsuarioSign';
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true });