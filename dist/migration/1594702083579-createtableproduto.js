"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createtableproduto1594702083579 = void 0;

class createtableproduto1594702083579 {
  constructor() {
    this.name = 'createProduto1594702083579';
  }

  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "produto" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nome" character varying(100) NOT NULL, 
                "descricao" character varying(100) NOT NULL,
                "valor" integer NOT NULL,
                "caminho" character varying(100) NOT NULL,
                "destaque" character varying(10),
                "oculos" character varying(10),
                "calcas" character varying(10),
                "camisas" character varying(10),
                "sapatos" character varying(10),
                "masc" character varying(10),
                "finished" boolean)`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "produto"`);
  }

}

exports.createtableproduto1594702083579 = createtableproduto1594702083579;