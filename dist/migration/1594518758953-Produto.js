"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Produto1594518758953 = void 0;

class Produto1594518758953 {
  constructor() {
    this.name = 'createProduto1594518758953';
  }

  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "produto" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nome" character varying(100) NOT NULL, 
                "descricao" character varying(100) NOT NULL,
                "valor" integer NOT NULL,
                "caminho" character varying(100) NOT NULL,
                "destaque" character varying(10),
                "finished" boolean)`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "produto"`);
  }

}

exports.Produto1594518758953 = Produto1594518758953;