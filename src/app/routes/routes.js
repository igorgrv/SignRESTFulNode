const UsuarioController = require('../controller/usuarioController');
const usuarioRoutes = UsuarioController.routes();
const usuarioController = new UsuarioController();

module.exports = (app) => {
	app.post(usuarioRoutes.signup, usuarioController.signup());
	app.post(usuarioRoutes.signin, usuarioController.signin());
  app.get(usuarioRoutes.usuarios, usuarioController.usuarios());
  app.get(usuarioRoutes.usuario, usuarioController.usuario());
};
