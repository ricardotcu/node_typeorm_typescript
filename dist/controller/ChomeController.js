"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categorias = exports.add_carrinho = exports.get_produto = exports.get_produtos = exports.get_home = void 0;

var _typeorm = require("typeorm");

var _Produto = require("../entity/Produto");

var _Slider = require("../entity/Slider");

var _Home = require("../models/Home");

var _Categorias_Home = require("../entity/Categorias_Home");

var _Cliente = require("../entity/Cliente");

var _Categoria = require("../entity/Categoria");

//retorna todos os produtos(pagina de home-destaque=true)
const get_home = async (req, res) => {
  const destaque = 'sim';
  const destaques = await (0, _typeorm.getRepository)(_Produto.Produto).find({
    select: ["id", "nome", "descricao", "valor", "caminho", "destaque"],
    relations: ["categoria"],
    where: {
      destaque
    }
  });
  const slides = await (0, _typeorm.getRepository)(_Slider.Slider).find();
  const categorias = await (0, _typeorm.getRepository)(_Categorias_Home.Categorias_Home).find();
  const home_content = new _Home.Home(destaques, slides, categorias);
  return res.json(home_content);
}; //retorna todos os produtos(pagina de produtos)


exports.get_home = get_home;

const get_produtos = async (req, res) => {
  const produtos = await (0, _typeorm.getRepository)(_Produto.Produto).find({
    select: ["id", "nome", "descricao", "valor", "caminho", "destaque"],
    relations: ["categoria"]
  });
  return res.json(produtos);
}; //retorna um produto para pelo id


exports.get_produtos = get_produtos;

const get_produto = async (req, res) => {
  const {
    id
  } = req.params;
  const produto = await (0, _typeorm.getRepository)(_Produto.Produto).find({
    select: ["id", "nome", "descricao", "valor", "caminho", "destaque"],
    relations: ["categoria"],
    where: {
      id
    }
  });
  return res.json(produto);
}; //add produto no carrinho do cliente


exports.get_produto = get_produto;

const add_carrinho = async (req, res) => {
  const {
    id
  } = req.params;
  const resultado = await (0, _typeorm.getRepository)(_Cliente.Cliente).update(id, {
    carrinho: req.body
  });

  if (resultado.affected === 0) {
    return res.status(404).json({
      message: 'erro up'
    });
  }

  console.log('up com sucesso');
}; //retorna categorias dos produtos


exports.add_carrinho = add_carrinho;

const categorias = async (req, res) => {
  const cat = await (0, _typeorm.getRepository)(_Categoria.Categoria).find({
    select: ["id", "nome"],
    relations: ["produtos"]
  });
  return res.json(cat);
};

exports.categorias = categorias;