"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.save_produto = exports.addSlidersAdmin = exports.addBlogAdmin = exports.addCategoriaAdmin = exports.addInstagramAdmin = exports.getHomeAdmin = void 0;

var _typeorm = require("typeorm");

var _Produto = require("../entity/Produto");

var _Instagram = require("../entity/Instagram");

var _Blog = require("../entity/Blog");

var _Slider = require("../entity/Slider");

var _Categorias = require("./../entity/Categorias");

const getHomeAdmin = async (req, res) => {
  const produtos = await (0, _typeorm.getRepository)(_Produto.Produto).find();
  return res.json(produtos);
};

exports.getHomeAdmin = getHomeAdmin;

const addInstagramAdmin = async (req, res) => {
  const {
    caminho
  } = req.body;
  const instagram = await (0, _typeorm.getRepository)(_Instagram.Instagram).save({
    caminho
  });
  return res.json(instagram);
};

exports.addInstagramAdmin = addInstagramAdmin;

const addCategoriaAdmin = async (req, res) => {
  const {
    caminho
  } = req.body;
  const categoria = await (0, _typeorm.getRepository)(_Categorias.Categorias).save({
    caminho
  });
  return res.json(categoria);
};

exports.addCategoriaAdmin = addCategoriaAdmin;

const addBlogAdmin = async (req, res) => {
  const {
    nome,
    descricao,
    caminho
  } = req.body;
  const blog = await (0, _typeorm.getRepository)(_Blog.Blog).save({
    nome,
    descricao,
    caminho
  });
  return res.json(blog);
};

exports.addBlogAdmin = addBlogAdmin;

const addSlidersAdmin = async (req, res) => {
  const {
    descricao,
    caminho
  } = req.body;
  const blog = await (0, _typeorm.getRepository)(_Slider.Slider).save({
    descricao,
    caminho
  });
  return res.json(blog);
};

exports.addSlidersAdmin = addSlidersAdmin;

const save_produto = async (req, res) => {
  const produtos = await (0, _typeorm.getRepository)(_Produto.Produto).save(req.body);
  return res.json(produtos);
};

exports.save_produto = save_produto;