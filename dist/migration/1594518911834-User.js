"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User1594518911834 = void 0;

class User1594518911834 {
  constructor() {
    this.name = 'createUser1594518911834';
  }

  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "user" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nome" character varying(100) NOT NULL, 
                "sobrenome" character varying(100) NOT NULL,
                "email" character varying(100) NOT NULL,
                "senha" character varying(100) NOT NULL,
                "cargo" character varying(100) NOT NULL,
                "rg" character varying(105) NOT NULL,
                "cpf" character varying(15) NOT NULL,
                "finished" boolean)`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "user"`);
  }

}

exports.User1594518911834 = User1594518911834;