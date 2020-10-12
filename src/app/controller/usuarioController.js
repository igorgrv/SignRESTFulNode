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
    return async (req, res) => {
      const usuario = new Usuario(req.body);
      try {
        await usuario.save();
        res.status(201).json(usuario);
      } catch (err) {
        res.status(400).json(err);
      }
    };
  }

  signin() {
    return async (req, res) => {
      try {
        const usuario = await Usuario.findByCredentials(req.body.email, req.body.senha);
        console.log(usuario);
        res.status(200).json(usuario);
      } catch (err) {
        res.status(400).json(err);
      }
    }
  }

  usuarios() {
    return async (req, res) => {
      try {
        const usuarios = await Usuario.find({});
        res.status(200).json(usuarios);
      } catch (err) {
        res.status(500).json(err);
      }
    };
  }

  usuario() {
    return async (req, res) => {
      const _id = req.params.id;
      try {
        const usuario = await Usuario.findById(_id);
        if (!usuario) {
          res.status(500).send('Usuário não encontrado');
        }
        res.status(200).json(usuario);
      } catch (err) {
        res.status(500).json(err);
      }
    };
  }
}

module.exports = UsuarioController;
