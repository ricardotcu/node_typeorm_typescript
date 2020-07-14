"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cliente1594518864396 = void 0;

class Cliente1594518864396 {
  constructor() {
    this.name = 'createCliente1594518864396';
  }

  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "cliente" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nome" character varying(100) NOT NULL, 
                "descricao" character varying(100) NOT NULL,
                "valor" integer NOT NULL,
                "caminho" character varying(100) NOT NULL,
                "finished" boolean)`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "cliente"`);
  }

}

exports.Cliente1594518864396 = Cliente1594518864396;