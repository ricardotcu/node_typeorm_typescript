"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popularbanco1595245130339 = void 0;

class popularbanco1595245130339 {
  async up(queryRunner) {
    await queryRunner.query(`INSERT INTO "categoria_home" ("caminho") VALUES ('../../assets/images/calca.jpg')`);
    await queryRunner.query(`INSERT INTO "categoria_home" ("caminho") VALUES ('../../assets/images/camisa.png')`);
    await queryRunner.query(`INSERT INTO "categoria_home" ("caminho") VALUES ('../../assets/images/sapato.jpg')`);
    await queryRunner.query(`INSERT INTO "categoria" ("nome") VALUES ('calca')`);
    await queryRunner.query(`INSERT INTO "categoria" ("nome") VALUES ('camisa')`);
    await queryRunner.query(`INSERT INTO "categoria" ("nome") VALUES ('sapato')`);
    await queryRunner.query(`INSERT INTO "slider" ("descricao", "caminho") VALUES ('slider1', '../../assets/images/slider.png')`);
  }

  async down(queryRunner) {}

}

exports.popularbanco1595245130339 = popularbanco1595245130339;