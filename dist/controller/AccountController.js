"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upUserAdmin = exports.delUserAdmin = exports.addUsersAdmin = exports.listUsersAdmin = exports.loginc = exports.login = exports.registerC = exports.register = void 0;

var _typeorm = require("typeorm");

var bcrypt = _interopRequireWildcard(require("bcrypt"));

var _User = require("../entity/User");

var _Cliente = require("../entity/Cliente");

var jwt = _interopRequireWildcard(require("jsonwebtoken"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//cria usuario no banc
const register = async (req, res) => {
  const {
    nome,
    sobrenome,
    email,
    senha,
    cargo,
    rg,
    cpf
  } = req.body;
  const senha_hash = await bcrypt.hash(senha, 8);
  const users = await (0, _typeorm.getRepository)(_User.User).save({
    nome,
    sobrenome,
    email,
    senha: senha_hash,
    cargo,
    rg,
    cpf
  });
  return res.json(users);
}; //register cliente


exports.register = register;

const registerC = async (req, res) => {
  const {
    nome,
    email,
    senha
  } = req.body;
  const senha_hash = await bcrypt.hash(senha, 8);
  const user = await (0, _typeorm.getRepository)(_Cliente.Cliente).save({
    nome,
    email,
    senha: senha_hash
  });
  return res.json(user);
}; //loga


exports.registerC = registerC;

const login = async (req, res) => {
  const {
    email,
    senha
  } = req.body;
  const secret = "84edbc64b2e424f48fd21c08e26d9dd9";
  const user = await (0, _typeorm.getRepository)(_User.User).find({
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
      const data = {
        id: user[0].id,
        nome: user[0].nome,
        email: user[0].email,
        token
      };
      return res.json(data);
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


exports.login = login;

const loginc = async (req, res) => {
  const {
    email,
    senha
  } = req.body;
  const secret = "84edbc64b2e424f48fd21c08e26d9dd9";
  const client = await (0, _typeorm.getRepository)(_Cliente.Cliente).find({
    where: {
      email
    }
  });

  if (client.length === 1) {
    if (await bcrypt.compare(senha, client[0].senha)) {
      const token = jwt.sign({
        id: client[0].id
      }, secret, {
        expiresIn: '1d'
      });
      const data = {
        id: client[0].id,
        nome: client[0].nome,
        email: client[0].email,
        token
      };
      console.log(data);
      return res.json(data);
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


exports.loginc = loginc;

const listUsersAdmin = async (req, res) => {
  const users = await (0, _typeorm.getRepository)(_User.User).find();
  return res.json(users);
}; //add usuario no banco pelo sistema


exports.listUsersAdmin = listUsersAdmin;

const addUsersAdmin = async (req, res) => {
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
    sobrenome,
    email,
    senha: senha_hash,
    cargo,
    rg,
    cpf
  });
  return res.json(users);
}; //deletar um usuario no banco


exports.addUsersAdmin = addUsersAdmin;

const delUserAdmin = async (req, res) => {
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


exports.delUserAdmin = delUserAdmin;

const upUserAdmin = async (req, res) => {
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

exports.upUserAdmin = upUserAdmin;