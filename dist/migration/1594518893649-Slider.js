"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider1594518893649 = void 0;

class Slider1594518893649 {
  constructor() {
    this.name = 'createSlider1594518893649';
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

exports.Slider1594518893649 = Slider1594518893649;