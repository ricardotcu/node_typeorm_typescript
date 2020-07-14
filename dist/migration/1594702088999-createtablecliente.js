"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createtablecliente1594702088999 = void 0;

class createtablecliente1594702088999 {
  constructor() {
    this.name = 'createCliente1594702088999';
  }

  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "cliente" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nome" character varying(100) NOT NULL,
                "email" character varying(100) NOT NULL,
                "senha" character varying(100) NOT NULL,
                "finished" boolean)`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "cliente"`);
  }

}

exports.createtablecliente1594702088999 = createtablecliente1594702088999;