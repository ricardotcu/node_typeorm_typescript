"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Class1594533779296 = void 0;

class Class1594533779296 {
  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "class" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nome" character varying(100) NOT NULL,
                "finished" boolean)`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "class"`);
  }

}

exports.Class1594533779296 = Class1594533779296;