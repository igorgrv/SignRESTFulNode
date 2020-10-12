const UsuarioController = require('../controller/usuarioController');
const usuarioRoutes = UsuarioController.routes();
const usuarioController = new UsuarioController();

module.exports = (app) => {

	app.post(usuarioRoutes.signup, usuarioController.signup());

}