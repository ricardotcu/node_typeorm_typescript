"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Carrinho1594518824045 = void 0;

class Carrinho1594518824045 {
  constructor() {
    this.name = 'createCarrinho1594518824045';
  }

  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "carrinho" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nome" character varying(100) NOT NULL, 
                "sku" integer NOT NULL,
                "descricao" character varying(100) NOT NULL,
                "caminho" character varying(100) NOT NULL,
                "price" integer NOT NULL,
                "destaque" character varying(10) NOT NULL,
                "finished" boolean)`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "carrinho"`);
  }

}

exports.Carrinho1594518824045 = Carrinho1594518824045;