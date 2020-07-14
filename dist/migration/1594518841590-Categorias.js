"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Categorias1594518841590 = void 0;

class Categorias1594518841590 {
  constructor() {
    this.name = 'createCategoria1594518841590';
  }

  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "categoria" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "caminho" character varying(100) NOT NULL,
                "finished" boolean)`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "categoria"`);
  }

}

exports.Categorias1594518841590 = Categorias1594518841590;