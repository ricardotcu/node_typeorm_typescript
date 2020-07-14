"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addtableslider1594705221987 = void 0;

class addtableslider1594705221987 {
  async up(queryRunner) {
    await queryRunner.query("INSERT INTO slider (descricao, caminho) VALUES ('Green Dress with detailsGreen Dress with details', '../../assets/img/cliente/hero/hero_man.png')");
  }

  async down(queryRunner) {}

}

exports.addtableslider1594705221987 = addtableslider1594705221987;