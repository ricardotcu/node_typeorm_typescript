"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addBlog1594518782527 = void 0;

class addBlog1594518782527 {
  async up(queryRunner) {
    await queryRunner.query("INSERT INTO blog (nome, descricao, caminho) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', '../../assets/img/blog-img-01.jpg')");
    await queryRunner.query("INSERT INTO blog (nome, descricao, caminho) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', '../../assets/img/blog-img-02.jpg')");
    await queryRunner.query("INSERT INTO blog (nome, descricao, caminho) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', '../../assets/img/blog-img-03.jpg')");
  }

  async down(queryRunner) {
    await queryRunner.query("DELETE FROM blog WHERE nome = 'Green Dress with details'");
    await queryRunner.query("DELETE FROM blog WHERE nome = 'Green Dress with details");
    await queryRunner.query("DELETE FROM blog WHERE nome = 'Green Dress with details'");
  }

}

exports.addBlog1594518782527 = addBlog1594518782527;