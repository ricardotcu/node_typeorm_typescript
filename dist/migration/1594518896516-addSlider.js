"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSlider1594518896516 = void 0;

class addSlider1594518896516 {
  async up(queryRunner) {
    await queryRunner.query("INSERT INTO slider (descricao, caminho) VALUES ('Green Dress with detailsGreen Dress with details', '../../assets/img/cliente/hero/hero_man.png')");
  }

  async down(queryRunner) {
    await queryRunner.query("DELETE FROM slider WHERE descricao = 'Green Dress with detailsGreen Dress with details'");
  }

}

exports.addSlider1594518896516 = addSlider1594518896516;