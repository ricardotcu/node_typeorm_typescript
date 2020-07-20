"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProdutosId = exports.upProdutoAdmin = exports.delProdutoAdmin = exports.addProdutosAdmin = exports.listProdutosAdmin = void 0;

var _typeorm = require("typeorm");

var _Produto = require("../entity/Produto");

//retorna todos os produtos
const listProdutosAdmin = async (req, res) => {
  const produtos = await (0, _typeorm.getRepository)(_Produto.Produto).find();
  return res.json(produtos);
}; //add usuario no banco pelo sistema


exports.listProdutosAdmin = listProdutosAdmin;

const addProdutosAdmin = async (req, res) => {
  const {
    nome,
    descricao,
    valor,
    caminho
  } = req.body;
  const prod = await (0, _typeorm.getRepository)(_Produto.Produto).save({
    nome,
    descricao,
    valor,
    caminho
  });
  console.log(prod);
  return res.json(prod);
}; //deletar um produto no banco


exports.addProdutosAdmin = addProdutosAdmin;

const delProdutoAdmin = async (req, res) => {
  const {
    id
  } = req.params;
  const resultado = await (0, _typeorm.getRepository)(_Produto.Produto).delete(id);

  if (resultado.affected === 0) {
    return res.status(404).json({
      message: 'erro del'
    });
  }

  console.log('del com sucesso');
  return res.json(resultado);
}; //edita um usuario no banco


exports.delProdutoAdmin = delProdutoAdmin;

const upProdutoAdmin = async (req, res) => {
  const {
    id
  } = req.params;
  const resultado = await (0, _typeorm.getRepository)(_Produto.Produto).update(id, req.body);

  if (resultado.affected === 0) {
    return res.status(404).json({
      message: 'erro up'
    });
  }

  console.log('up com sucesso');
}; //retorna um produto


exports.upProdutoAdmin = upProdutoAdmin;

const getProdutosId = async (req, res) => {
  const produtos = await (0, _typeorm.getRepository)(_Produto.Produto).find();
  return res.json(produtos);
};

exports.getProdutosId = getProdutosId;