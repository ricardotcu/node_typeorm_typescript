"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Blog1594518809705 = void 0;

class Blog1594518809705 {
  constructor() {
    this.name = 'createBlog1594518809705';
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

exports.Blog1594518809705 = Blog1594518809705;