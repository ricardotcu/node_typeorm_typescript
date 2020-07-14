"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createtablecategoria1594704258311 = void 0;

class createtablecategoria1594704258311 {
  constructor() {
    this.name = 'createtablecategorias1594704258311';
  }

  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "categorias" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "caminho" character varying(100) NOT NULL,
                "finished" boolean)`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "categorias"`);
  }

}

exports.createtablecategoria1594704258311 = createtablecategoria1594704258311;