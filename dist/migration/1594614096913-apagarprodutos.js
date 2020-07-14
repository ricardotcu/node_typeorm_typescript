"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apagarprodutos1594614096913 = void 0;

class apagarprodutos1594614096913 {
  async up(queryRunner) {
    await queryRunner.query("DELETE FROM produto WHERE nome = 'Green Dress with details'");
  }

  async down(queryRunner) {}

}

exports.apagarprodutos1594614096913 = apagarprodutos1594614096913;