class UsuarioController {
  static routes() {
    return {
      signup: '/signup',
      signin: '/signin',
      usuarios: '/usuarios',
      usuarioId: '/usuario/:id',
    };
  }

  signup() {
    return (req, res) => {
      console.log(req.body);
      res.send('testing');
    };
  }
}

module.exports = UsuarioController;