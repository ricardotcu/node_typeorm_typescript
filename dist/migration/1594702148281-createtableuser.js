"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createtableuser1594702148281 = void 0;

class createtableuser1594702148281 {
  constructor() {
    this.name = 'createUser1594702148281';
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

exports.createtableuser1594702148281 = createtableuser1594702148281;