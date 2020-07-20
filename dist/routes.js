"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _cors = _interopRequireDefault(require("cors"));

var _ChomeController = require("./controller/ChomeController");

var _HomeController = require("./controller/HomeController");

var _ProdutosController = require("./controller/ProdutosController");

var _AccountController = require("./controller/AccountController");

var _auth = require("./middlewares/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)(); //opçoes para cors midddleware

const options = {
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token", "Authorization"],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: ["*", "http://localhost:4200", "https://zen-poincare-31d36c.netlify.app", "https://zen-poincare-31d36c.netlify.app/", "https://zen-poincare-31d36c.netlify.app/chome"],
  preflightContinue: false
}; //use cors middleware

routes.use((0, _cors.default)(options));
routes.get('/', _ChomeController.get_home); //feito

routes.get('/home', _ChomeController.get_home); //feito

routes.get('/produtos', _ChomeController.get_produtos); //feito

routes.get('/produto/:id', _ChomeController.get_produto); //feito
//AccountController

routes.post('/register', _AccountController.register_admin); //feito

routes.post('/registerC', _AccountController.register_cliente); //feito 

routes.post('/login', _AccountController.login_admin); //feito

routes.post('/loginc', _AccountController.login_cliente); //feito
//middleware autenticacao

routes.use(_auth.auth);
_ChomeController.add_carrinho; //permitidas para usuarios admin
//rotas para clientes logados

routes.post('/add_carrinho', _ChomeController.add_carrinho); //HomeController

routes.post('/add-instagram-admin', _HomeController.addInstagramAdmin);
routes.post('/add-blog-admin', _HomeController.addBlogAdmin); //HomeController 

routes.get('/home-admin', _HomeController.getHomeAdmin);
routes.post('/add-sliders-admin', _HomeController.addSlidersAdmin); //ProdutoController

routes.get('/list-produtos-admin', _ProdutosController.listProdutosAdmin);
routes.put('/up-produto-admin/:id', _ProdutosController.upProdutoAdmin);
routes.post('/add-produto-admin', _ProdutosController.addProdutosAdmin); //

routes.delete('/del-produto-admin/:id', _ProdutosController.delProdutoAdmin); //UsuarioController

routes.get('/list-usuarios-admin', _AccountController.list_users_admin);
routes.post('/add-usuario-admin', _AccountController.add_users_admin);
routes.delete('/del-usuario-admin/:id', _AccountController.del_user_admin);
routes.put('/up-usuario-admin/:id', _AccountController.up_user_admin);
routes.post('/add-categoria-admin', _HomeController.addCategoriaAdmin); //enable pre-flight

var _default = routes;
exports.default = _default;