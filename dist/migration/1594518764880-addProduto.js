"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addProduto1594518764880 = void 0;

class addProduto1594518764880 {
  async up(queryRunner) {
    await queryRunner.query("INSERT INTO produto (nome, descricao, valor, caminho, destaque) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/img/cliente/categori/product4.png', 'sim')");
    await queryRunner.query("INSERT INTO produto (nome, descricao, valor, caminho) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/img/cliente/categori/product2.png')");
    await queryRunner.query("INSERT INTO produto (nome, descricao, valor, caminho, destaque) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/img/cliente/categori/product2.png', 'sim')");
    await queryRunner.query("INSERT INTO produto (nome, descricao, valor, caminho, destaque) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/img/cliente/categori/product7.png', 'sim')");
    await queryRunner.query("INSERT INTO produto (nome, descricao, valor, caminho, destaque) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/img/cliente/categori/product2.png', 'sim')");
    await queryRunner.query("INSERT INTO produto (nome, descricao, valor, caminho, destaque) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/img/cliente/categori/product3.png', 'sim')");
    await queryRunner.query("INSERT INTO produto (nome, descricao, valor, caminho, destaque) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/img/cliente/categori/product6.png', 'sim')");
    await queryRunner.query("INSERT INTO produto (nome, descricao, valor, caminho, destaque) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/img/cliente/categori/product4.png', 'sim')");
    await queryRunner.query("INSERT INTO produto (nome, descricao, valor, caminho, destaque) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/img/cliente/categori/product7.png', 'sim')");
    await queryRunner.query("INSERT INTO produto (nome, descricao, valor, caminho) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/img/cliente/categori/product3.png')");
    await queryRunner.query("INSERT INTO produto (nome, descricao, valor, caminho, destaque) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/img/cliente/categori/product1.png', 'sim')");
    await queryRunner.query("INSERT INTO produto (nome, descricao, valor, caminho, destaque) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/img/cliente/categori/product2.png', 'sim')");
  }

  async down(queryRunner) {
    await queryRunner.query("DELETE FROM produto WHERE name = 'Green Dress with details'");
    await queryRunner.query("DELETE FROM produto WHERE name = 'Green Dress with details");
    await queryRunner.query("DELETE FROM produto WHERE name = 'Green Dress with details'");
    await queryRunner.query("DELETE FROM produto WHERE name = 'Green Dress with details");
    await queryRunner.query("DELETE FROM produto WHERE name = 'Green Dress with details'");
    await queryRunner.query("DELETE FROM produto WHERE name = 'Green Dress with details");
    await queryRunner.query("DELETE FROM produto WHERE name = 'Green Dress with details'");
    await queryRunner.query("DELETE FROM produto WHERE name = 'Green Dress with details");
    await queryRunner.query("DELETE FROM produto WHERE name = 'Green Dress with details'");
    await queryRunner.query("DELETE FROM produto WHERE name = 'Green Dress with details");
    await queryRunner.query("DELETE FROM produto WHERE name = 'Green Dress with details'");
    await queryRunner.query("DELETE FROM produto WHERE name = 'Green Dress with details");
  }

}

exports.addProduto1594518764880 = addProduto1594518764880;