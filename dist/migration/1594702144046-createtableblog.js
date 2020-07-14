"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createtableblog1594702144046 = void 0;

class createtableblog1594702144046 {
  constructor() {
    this.name = 'createBlog1594702144046';
  }

  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "blog" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nome" character varying(100) NOT NULL, 
                "descricao" character varying(100) NOT NULL,
                "caminho" character varying(100) NOT NULL,
                "finished" boolean)`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "blog"`);
  }

}

exports.createtableblog1594702144046 = createtableblog1594702144046;