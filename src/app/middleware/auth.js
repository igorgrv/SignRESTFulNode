const jwt = require('jsonwebtoken');
const Usuario = require('../model/usuario');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, 'accenture');
    const user = await Usuario.findOne({ _id: decoded._id });
    req.user = user;
    if (!user) {
      res.status(400).json({ mensagem: 'Não autorizado' });
    }

    next();
  } catch (error) {
    res.status(400).json({ mensagem: 'Não autorizado' });
  }
};

module.exports = auth;
