import { Router } from 'express';
import cors from 'cors';
import {
    get_home,
    get_produtos,
    get_produto,
    add_carrinho,
    categorias
} from './controller/ChomeController';
import { getHomeAdmin, addInstagramAdmin, addCategoriaAdmin, addBlogAdmin, addSlidersAdmin } from './controller/HomeController';
import { listProdutosAdmin, addProdutosAdmin, delProdutoAdmin, upProdutoAdmin } from './controller/ProdutosController';
import {
    register_cliente,
    register_admin,
    list_users_admin,
    add_users_admin,
    login_admin,
    login_cliente,
    del_user_admin,
    up_user_admin
} from './controller/AccountController';
import { auth } from './middlewares/auth';



const routes = Router();

//opçoes para cors midddleware
const options:cors.CorsOptions = {
    allowedHeaders: [
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "X-Access-Token",
        "Authorization"
    ],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: [
        "*",
        "http://localhost:4200",
        "https://keen-curie-febfbf.netlify.app",
        "https://keen-curie-febfbf.netlify.app/",
        "https://keen-curie-febfbf.netlify.app/home"
    ],
    preflightContinue: false
};

//use cors middleware
routes.use(cors(options));

routes.get('/', get_home); //feito

routes.get('/home', get_home); //feito
routes.get('/produtos', get_produtos); //feito
routes.get('/produto/:id', get_produto); //feito

//AccountController
routes.post('/register', register_admin); //feito
routes.post('/registerC', register_cliente); //feito 
routes.post('/login', login_admin); //feito
routes.post('/loginc', login_cliente); //feito
routes.post('/categorias', categorias); //feito




//middleware autenticacao
routes.use(auth);

//permitidas para usuarios admin

//rotas para clientes logados
routes.post('/add_carrinho', add_carrinho);


//HomeController
routes.post('/add-instagram-admin', addInstagramAdmin);
routes.post('/add-blog-admin', addBlogAdmin);

//HomeController 
routes.get('/home-admin', getHomeAdmin);
routes.post('/add-sliders-admin', addSlidersAdmin);
//ProdutoController
routes.get('/list-produtos-admin', listProdutosAdmin); 
routes.put('/up-produto-admin/:id', upProdutoAdmin);
routes.post('/add-produto-admin', addProdutosAdmin);//
routes.delete('/del-produto-admin/:id', delProdutoAdmin);
//UsuarioController
routes.get('/list-usuarios-admin', list_users_admin); 
routes.post('/add-usuario-admin', add_users_admin); 
routes.delete('/del-usuario-admin/:id', del_user_admin);
routes.put('/up-usuario-admin/:id', up_user_admin);
routes.post('/add-categoria-admin', addCategoriaAdmin);
//enable pre-flight

export default routes;
