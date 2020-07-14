"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createtableslider1594704244405 = void 0;

class createtableslider1594704244405 {
  constructor() {
    this.name = 'createtableslider1594704244405';
  }

  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "slider" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "descricao" character varying(100) NOT NULL,
                "caminho" character varying(100) NOT NULL,
                "finished" boolean)`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "slider"`);
  }

}

exports.createtableslider1594704244405 = createtableslider1594704244405;