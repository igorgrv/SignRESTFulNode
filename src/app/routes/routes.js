const UsuarioController = require('../controller/usuarioController');
const usuarioRoutes = UsuarioController.routes();
const usuarioController = new UsuarioController();
const auth = require('../middleware/auth');

const initializeEndPoints = (app) => {

  app.post(usuarioRoutes.signup, usuarioController.signup());
  app.post(usuarioRoutes.signin, usuarioController.signin());
  app.get(usuarioRoutes.usuarios, auth, usuarioController.usuarios());
  app.get(usuarioRoutes.usuario, auth, usuarioController.usuario());
};

module.exports = initializeEndPoints;