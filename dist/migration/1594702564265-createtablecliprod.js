"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createtablecliprod1594702564265 = void 0;

class createtablecliprod1594702564265 {
  constructor() {
    this.name = 'createtablecliprod1594702564265';
  }

  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "cli_prod" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "id_cliente" uuid NOT NULL,
                "id_produto" uuid NOT NULL,
                "finished" boolean)`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "cli_prod"`);
  }

}

exports.createtablecliprod1594702564265 = createtablecliprod1594702564265;