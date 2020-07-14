"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Instagram1594518877254 = void 0;

class Instagram1594518877254 {
  constructor() {
    this.name = 'createCliente1594518877254';
  }

  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "instagram" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "caminho" character varying(100) NOT NULL,
                "finished" boolean)`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "instagram"`);
  }

}

exports.Instagram1594518877254 = Instagram1594518877254;