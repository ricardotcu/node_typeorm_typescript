"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.up_user_admin = exports.del_user_admin = exports.add_users_admin = exports.list_users_admin = exports.login_cliente = exports.login_admin = exports.register_cliente = exports.register_admin = void 0;

var _typeorm = require("typeorm");

var bcrypt = _interopRequireWildcard(require("bcrypt"));

var _User = require("../entity/User");

var _Cliente = require("../entity/Cliente");

var jwt = _interopRequireWildcard(require("jsonwebtoken"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//cria usuario no banco
const register_admin = async (req, res) => {
  const {
    nome,
    email,
    senha,
    avatar
  } = req.body;
  const secret = "84edbc64b2e424f48fd21c08e26d9dd9";
  const senha_hash = await bcrypt.hash(senha, 8);
  const token = jwt.sign({
    nome
  }, secret, {
    expiresIn: '1d'
  });
  const user = await (0, _typeorm.getRepository)(_User.User).save({
    nome,
    email,
    senha: senha_hash,
    token,
    avatar
  });
  return res.json(user);
}; //register cliente


exports.register_admin = register_admin;

const register_cliente = async (req, res) => {
  const {
    nome,
    email,
    senha,
    avatar
  } = req.body;
  const secret = "84edbc64b2e424f48fd21c08e26d9dd9";
  const senha_hash = await bcrypt.hash(senha, 8);
  const token = jwt.sign({
    nome
  }, secret, {
    expiresIn: '1d'
  });
  const user = await (0, _typeorm.getRepository)(_Cliente.Cliente).save({
    nome,
    email,
    senha: senha_hash,
    avatar,
    token
  });
  return res.json(user);
}; //loga admin


exports.register_cliente = register_cliente;

const login_admin = async (req, res) => {
  const {
    email,
    senha
  } = req.body;
  const secret = "84edbc64b2e424f48fd21c08e26d9dd9";
  const user = await (0, _typeorm.getRepository)(_User.User).find({
    select: ["id", "nome", "email", "senha", "avatar", "token"],
    relations: ["carrinho"],
    where: {
      email
    }
  });

  if (user.length === 1) {
    if (await bcrypt.compare(senha, user[0].senha)) {
      const token = jwt.sign({
        id: user[0].id
      }, secret, {
        expiresIn: '1d'
      });
      user[0].token = token;
      return res.json(user);
    } else {
      return res.status(404).json({
        message: 'user nao existe'
      });
    }
  } else {
    return res.status(404).json({
      message: 'erro ao logar'
    });
  }
}; //loga cliente


exports.login_admin = login_admin;

const login_cliente = async (req, res) => {
  const {
    email,
    senha
  } = req.body;
  const secret = "84edbc64b2e424f48fd21c08e26d9dd9";
  const cliente = await (0, _typeorm.getRepository)(_Cliente.Cliente).find({
    select: ["id", "nome", "email", "senha", "avatar", "token"],
    relations: ["carrinho"],
    where: {
      email
    }
  });

  if (cliente.length === 1) {
    if (await bcrypt.compare(senha, cliente[0].senha)) {
      const token = jwt.sign({
        id: cliente[0].id
      }, secret, {
        expiresIn: '1d'
      });
      cliente[0].token = token;
      return res.json(cliente);
    } else {
      return res.status(404).json({
        message: 'cliente nao existe'
      });
    }
  } else {
    return res.status(404).json({
      message: 'erro ao logar cliente'
    });
  }
}; //recupera todos os usuarios no banco


exports.login_cliente = login_cliente;

const list_users_admin = async (req, res) => {
  const users = await (0, _typeorm.getRepository)(_User.User).find();
  return res.json(users);
}; //add usuario no banco pelo sistema


exports.list_users_admin = list_users_admin;

const add_users_admin = async (req, res) => {
  const {
    nome,
    sobrenome,
    email,
    cargo,
    rg,
    cpf,
    senha
  } = req.body;
  const senha_hash = await bcrypt.hash(senha, 8);
  const users = await (0, _typeorm.getRepository)(_User.User).save({
    nome,
    email,
    senha: senha_hash
  });
  return res.json(users);
}; //deletar um usuario no banco


exports.add_users_admin = add_users_admin;

const del_user_admin = async (req, res) => {
  const {
    id
  } = req.params;
  const resultado = await (0, _typeorm.getRepository)(_User.User).delete(id);

  if (resultado.affected === 0) {
    return res.status(404).json({
      message: 'erro'
    });
  }
}; //edita um usuario no banco


exports.del_user_admin = del_user_admin;

const up_user_admin = async (req, res) => {
  const {
    id
  } = req.params;
  const resultado = await (0, _typeorm.getRepository)(_User.User).update(id, req.body);

  if (resultado.affected === 0) {
    return res.status(404).json({
      message: 'erro up'
    });
  }

  console.log('up com sucesso');
};

exports.up_user_admin = up_user_admin;