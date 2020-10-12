const Usuario = require('../model/usuario');

class UsuarioController {
  static routes() {
    return {
      signup: '/signup',
      signin: '/signin',
      usuarios: '/usuarios',
      usuario: '/usuarios/:id',
    };
  }

  signup() {
    return (req, res) => {
      const usuario = new Usuario(req.body);
      usuario
        .save()
        .then(() => res.status(201).json(usuario))
        .catch((err) => res.status(400).json(err));
    };
  }

  usuarios() {
    return (req, res) => {
      Usuario.find({})
        .then((usuarios) => res.status(200).json(usuarios))
        .catch((err) => res.status(500).json(err));
    };
  }

  usuario() {
    return (req, res) => {
      const _id = req.params.id;
      Usuario.findById(_id)
        .then((usuario) => {
          if (!usuario) {
            res.status(500).send('Usuário não encontrado');
          }
          res.status(200).json(usuario);
        })
        .catch((err) => res.status(500).json(err));
    };
  }
}

module.exports = UsuarioController;
