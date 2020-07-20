"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adddadosfinal1595249669192 = void 0;

class adddadosfinal1595249669192 {
  async up(queryRunner) {
    await queryRunner.query(`INSERT INTO "categorias_home" ("caminho") VALUES ('../../assets/images/calca.jpg')`);
    await queryRunner.query(`INSERT INTO "categorias_home" ("caminho") VALUES ('../../assets/images/camisa.png')`);
    await queryRunner.query(`INSERT INTO "categorias_home" ("caminho") VALUES ('../../assets/images/sapato.jpg')`);
    await queryRunner.query(`INSERT INTO "categoria" ("nome") VALUES ('calca')`);
    await queryRunner.query(`INSERT INTO "categoria" ("nome") VALUES ('camisa')`);
    await queryRunner.query(`INSERT INTO "categoria" ("nome") VALUES ('sapato')`);
    await queryRunner.query(`INSERT INTO "slider" ("descricao", "caminho") VALUES ('slider1', '../../assets/images/slider.png')`);
  }

  async down(queryRunner) {}

}

exports.adddadosfinal1595249669192 = adddadosfinal1595249669192;