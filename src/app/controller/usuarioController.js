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
        const usuarioEmail = await Usuario.findByEmail(req.body.email);
        if (usuarioEmail) res.status(400).json({ mensagem: 'E-mail já existente' });
        await usuario.save();
        res.status(201).json(usuario);
      } catch (err) {
        res.status(400).json({ mensagem: 'mensagem de erro' });
      }
    };
  }

  signin() {
    return async (req, res) => {
      try {
        const usuario = await Usuario.findByCredentials(req.body.email, req.body.senha);
        const token = await usuario.generateAuthToken();
        res.status(200).json({ usuario, token });
      } catch (err) {
        res.status(400).json({ mensagem: 'Usuário e/ou senha inválidos' });
      }
    };
  }

  usuarios() {
    return async (req, res) => {
      try {
        const usuarios = await Usuario.find({});
        res.status(200).json(usuarios);
      } catch (err) {
        res.status(500).json({ mensagem: 'mensagem de erro' });
      }
    };
  }

  usuario() {
    return async (req, res) => {
      const _id = req.params.id;
      try {
        const usuario = await Usuario.findById(_id);
        if (!usuario) {
          res.status(500).send({ mensagem: 'usuário não encontrado' });
        }
        res.status(200).json(usuario);
      } catch (err) {
        res.status(500).json({ mensagem: 'mensagem de erro' });
      }
    };
  }
}

module.exports = UsuarioController;
