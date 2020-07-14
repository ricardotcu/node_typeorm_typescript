"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClass = exports.postClass = void 0;

var _typeorm = require("typeorm");

var _Class = require("../entity/Class");

//add class no banco pelo sistema
const postClass = async (req, res) => {
  const {
    nome
  } = req.body;
  const c = await (0, _typeorm.getRepository)(_Class.Class).save({
    nome
  });
  return res.json(c);
}; //retorna um class


exports.postClass = postClass;

const getClass = async (req, res) => {
  const c = await (0, _typeorm.getRepository)(_Class.Class).find();
  return res.json(c);
};

exports.getClass = getClass;