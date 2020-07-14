"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _cors = _interopRequireDefault(require("cors"));

var _ChomeController = require("./controller/ChomeController");

var _CarrinhoController = require("./controller/CarrinhoController");

var _HomeController = require("./controller/HomeController");

var _ProdutosController = require("./controller/ProdutosController");

var _AccountController = require("./controller/AccountController");

var _auth = require("./middlewares/auth");

var _ClassController = require("./controller/ClassController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)(); //opçoes para cors midddleware

const options = {
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token", "Authorization"],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: ["*", "http://localhost:4200", "https://node-typeorm-typescript.herokuapp.com", "https://node-typeorm-typescript.herokuapp.com/", "https://node-typeorm-typescript.herokuapp.com/chome"],
  preflightContinue: false
}; //use cors middleware

routes.use((0, _cors.default)(options));
routes.get('/', _ChomeController.getHome); //feito

routes.get('/home', _ChomeController.getHome); //feito

routes.get('/produtos', _ChomeController.getProdutos); //feito

routes.get('/produto/:id', _ChomeController.getProduto); //feito
//DEPLOY

routes.post('/postclass', _ClassController.postClass); //

routes.get('/getclass', _ClassController.getClass); //
//AccountController

routes.post('/register', _AccountController.register); //feito

routes.post('/registerC', _AccountController.registerC); //feito

routes.post('/login', _AccountController.login); //feito

routes.post('/loginc', _AccountController.loginc); //
//middleware autenticacao

routes.use(_auth.auth); //rotas apenas para cliente logado

routes.get('/carrinho', _CarrinhoController.getCarrinho); //feito

routes.post('/addcarrinho', _CarrinhoController.postCarrinho); //feito
//permitidas para usuarios admin
//HomeController

routes.post('/add-instagram-admin', _HomeController.addInstagramAdmin);
routes.post('/add-blog-admin', _HomeController.addBlogAdmin); //HomeController 

routes.get('/home-admin', _HomeController.getHomeAdmin); //feito mas alterarei ainda

routes.post('/add-sliders-admin', _HomeController.addSlidersAdmin); //ProdutoController

routes.get('/list-produtos-admin', _ProdutosController.listProdutosAdmin); //feito

routes.put('/up-produto-admin/:id', _ProdutosController.upProdutoAdmin);
routes.post('/add-produto-admin', _ProdutosController.addProdutosAdmin); //

routes.delete('/del-produto-admin/:id', _ProdutosController.delProdutoAdmin); //UsuarioController

routes.get('/list-usuarios-admin', _AccountController.listUsersAdmin); //feito

routes.post('/add-usuario-admin', _AccountController.addUsersAdmin); //feito

routes.delete('/del-usuario-admin/:id', _AccountController.delUserAdmin);
routes.put('/up-usuario-admin/:id', _AccountController.upUserAdmin);
routes.post('/add-categoria-admin', _HomeController.addCategoriaAdmin); //enable pre-flight

var _default = routes;
exports.default = _default;