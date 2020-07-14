"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Produto = void 0;

var _typeorm = require("typeorm");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let Produto = (_dec = (0, _typeorm.Entity)(), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)("uuid"), _dec3 = (0, _typeorm.Column)("varchar"), _dec4 = (0, _typeorm.Column)("varchar"), _dec5 = (0, _typeorm.Column)("integer"), _dec6 = (0, _typeorm.Column)("varchar"), _dec7 = (0, _typeorm.Column)("varchar", {
  nullable: true
}), _dec8 = (0, _typeorm.Column)("varchar", {
  nullable: true
}), _dec9 = (0, _typeorm.Column)("varchar", {
  nullable: true
}), _dec10 = (0, _typeorm.Column)("varchar", {
  nullable: true
}), _dec11 = (0, _typeorm.Column)("varchar", {
  nullable: true
}), _dec12 = (0, _typeorm.Column)("varchar", {
  nullable: true
}), _dec13 = (0, _typeorm.Column)("boolean", {
  default: false,
  nullable: true
}), _dec(_class = (_class2 = (_temp = class Produto {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "nome", _descriptor2, this);

    _initializerDefineProperty(this, "descricao", _descriptor3, this);

    _initializerDefineProperty(this, "valor", _descriptor4, this);

    _initializerDefineProperty(this, "caminho", _descriptor5, this);

    _initializerDefineProperty(this, "destaque", _descriptor6, this);

    _initializerDefineProperty(this, "camisas", _descriptor7, this);

    _initializerDefineProperty(this, "calcas", _descriptor8, this);

    _initializerDefineProperty(this, "sapatos", _descriptor9, this);

    _initializerDefineProperty(this, "oculos", _descriptor10, this);

    _initializerDefineProperty(this, "masc", _descriptor11, this);

    _initializerDefineProperty(this, "finished", _descriptor12, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nome", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "descricao", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "valor", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "caminho", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "destaque", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "camisas", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "calcas", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "sapatos", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "oculos", [_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "masc", [_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "finished", [_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.Produto = Produto;