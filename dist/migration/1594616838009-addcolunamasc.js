"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addcolunamasc1594616838009 = void 0;

class addcolunamasc1594616838009 {
  async up(queryRunner) {
    await queryRunner.query("ALTER TABLE produto ADD masc varchar(10);");
  }

  async down(queryRunner) {}

}

exports.addcolunamasc1594616838009 = addcolunamasc1594616838009;