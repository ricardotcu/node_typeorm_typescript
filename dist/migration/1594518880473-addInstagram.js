"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addInstagram1594518880473 = void 0;

class addInstagram1594518880473 {
  async up(queryRunner) {
    await queryRunner.query("INSERT INTO instagram (caminho) VALUES ('../../assets/img/instagram-img-05.jpg')");
    await queryRunner.query("INSERT INTO instagram (caminho) VALUES ('../../assets/img/instagram-img-08.jpg')");
    await queryRunner.query("INSERT INTO instagram (caminho) VALUES ('../../assets/img/instagram-img-04.jpg')");
    await queryRunner.query("INSERT INTO instagram (caminho) VALUES ('../../assets/img/instagram-img-07.jpg')");
    await queryRunner.query("INSERT INTO instagram (caminho) VALUES ('../../assets/img/instagram-img-03.jpg')");
    await queryRunner.query("INSERT INTO instagram (caminho) VALUES ('../../assets/img/instagram-img-01.jpg')");
  }

  async down(queryRunner) {
    await queryRunner.query("DELETE FROM instagram WHERE caminho = '../../assets/img/instagram-img-05.jpg''");
    await queryRunner.query("DELETE FROM instagram WHERE caminho = '../../assets/img/instagram-img-08.jpg'");
    await queryRunner.query("DELETE FROM instagram WHERE caminho = '../../assets/img/instagram-img-04.jpg''");
    await queryRunner.query("DELETE FROM instagram WHERE caminho = '../../assets/img/instagram-img-07.jpg'");
    await queryRunner.query("DELETE FROM instagram WHERE caminho = '../../assets/img/instagram-img-03.jpg''");
    await queryRunner.query("DELETE FROM instagram WHERE caminho = '../../assets/img/instagram-img-01.jpg'");
  }

}

exports.addInstagram1594518880473 = addInstagram1594518880473;