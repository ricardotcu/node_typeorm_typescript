"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addtablecategoria1594705242877 = void 0;

class addtablecategoria1594705242877 {
  async up(queryRunner) {
    await queryRunner.query("INSERT INTO categorias (caminho) VALUES ('../../assets/img/cliente/categori/cat3.jpg')");
    await queryRunner.query("INSERT INTO categorias (caminho) VALUES ('../../assets/img/cliente/categori/cat2.jpg')");
    await queryRunner.query("INSERT INTO categorias (caminho) VALUES ('../../assets/img/cliente/categori/cat1.jpg')");
  }

  async down(queryRunner) {}

}

exports.addtablecategoria1594705242877 = addtablecategoria1594705242877;