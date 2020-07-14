"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCategorias1594518836685 = void 0;

class addCategorias1594518836685 {
  async up(queryRunner) {
    await queryRunner.query("INSERT INTO categoria (caminho) VALUES ('../../assets/img/cliente/categori/cat3.jpg')");
    await queryRunner.query("INSERT INTO categoria (caminho) VALUES ('../../assets/img/cliente/categori/cat2.jpg')");
    await queryRunner.query("INSERT INTO categoria (caminho) VALUES ('../../assets/img/cliente/categori/cat1.jpg')");
  }

  async down(queryRunner) {
    await queryRunner.query("DELETE FROM categoria WHERE caminho = '../../assets/img/cliente/categori/cat1.jpg'");
    await queryRunner.query("DELETE FROM categoria WHERE caminho = '../../assets/img/cliente/categori/cat1.jpg");
    await queryRunner.query("DELETE FROM categoria WHERE caminho = '../../assets/img/cliente/categori/cat1.jpg'");
  }

}

exports.addCategorias1594518836685 = addCategorias1594518836685;