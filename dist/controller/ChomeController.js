"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProduto = exports.getProdutos = exports.getHome = void 0;

var _typeorm = require("typeorm");

var _Produto = require("../entity/Produto");

var _Slider = require("../entity/Slider");

var _Blog = require("../entity/Blog");

var _Home = require("../models/Home");

var _Categorias = require("./../entity/Categorias");

var _Instagram = require("../entity/Instagram");

//retorna os produtos da home page, produtos marcados como mais vendidos
const getHome = async (req, res) => {
  const destaque = 'sim';
  const destaques = await (0, _typeorm.getRepository)(_Produto.Produto).find({
    where: {
      destaque
    }
  });
  const slides = await (0, _typeorm.getRepository)(_Slider.Slider).find();
  const blog = await (0, _typeorm.getRepository)(_Blog.Blog).find();
  const instagram = await (0, _typeorm.getRepository)(_Instagram.Instagram).find();
  const categorias = await (0, _typeorm.getRepository)(_Categorias.Categoria).find();
  const home_content = new _Home.Home(destaques, slides, blog, instagram, categorias);
  return res.json(home_content);
}; //retorna os produtos da produtos page


exports.getHome = getHome;

const getProdutos = async (req, res) => {
  const produtos = await (0, _typeorm.getRepository)(_Produto.Produto).find();
  return res.json(produtos);
}; //retorna um produto da produto page


exports.getProdutos = getProdutos;

const getProduto = async (req, res) => {
  const {
    id
  } = req.params;
  const produto = await (0, _typeorm.getRepository)(_Produto.Produto).find({
    where: {
      id
    }
  });
  console.log(produto);
  return res.json(produto);
};

exports.getProduto = getProduto;