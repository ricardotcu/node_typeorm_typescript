"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addtableblog1594705235228 = void 0;

class addtableblog1594705235228 {
  async up(queryRunner) {
    await queryRunner.query("INSERT INTO blog (nome, descricao, caminho) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 'err')");
  }

  async down(queryRunner) {}

}

exports.addtableblog1594705235228 = addtableblog1594705235228;