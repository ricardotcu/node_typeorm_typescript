"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addcolunaprodutos1594614954140 = void 0;

class addcolunaprodutos1594614954140 {
  async up(queryRunner) {
    await queryRunner.query("ALTER TABLE produto ADD oculos varchar(10);");
    await queryRunner.query("ALTER TABLE produto ADD calcas varchar(10);");
    await queryRunner.query("ALTER TABLE produto ADD camisas varchar(10);");
    await queryRunner.query("ALTER TABLE produto ADD sapatos varchar(10);");
  }

  async down(queryRunner) {}

}

exports.addcolunaprodutos1594614954140 = addcolunaprodutos1594614954140;