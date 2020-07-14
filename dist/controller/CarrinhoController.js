"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postCarrinho = exports.getCarrinho = void 0;

var _typeorm = require("typeorm");

var _Carrinho = require("../entity/Carrinho");

//retorna todos os produtos do carrinho(depois so usuarios)
const getCarrinho = async (req, res) => {
  const destaques = await (0, _typeorm.getRepository)(_Carrinho.Carrinho).find();
  return res.json(destaques);
}; //retorna os produtos da home page, produtos marcados como mais vendidos


exports.getCarrinho = getCarrinho;

const postCarrinho = async (req, res) => {
  const {
    id,
    nome,
    caminho,
    descricao,
    valor
  } = req.body;
  const card = await (0, _typeorm.getRepository)(_Carrinho.Carrinho).save({
    name: nome,
    sku: id,
    descricao,
    caminho,
    price: valor
  });
  return res.json(card);
};

exports.postCarrinho = postCarrinho;