import {MigrationInterface, QueryRunner} from "typeorm";

export class addProduto1594518764880 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          "INSERT INTO produto (nome, descricao, valor, caminho, destaque) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/img/cliente/categori/product4.png', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/img/cliente/categori/product2.png')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/img/cliente/categori/product2.png', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/img/cliente/categori/product7.png', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/img/cliente/categori/product2.png', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/img/cliente/categori/product3.png', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/img/cliente/categori/product6.png', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/img/cliente/categori/product4.png', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/img/cliente/categori/product7.png', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/img/cliente/categori/product3.png')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/img/cliente/categori/product1.png', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/img/cliente/categori/product2.png', 'sim')",
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          "DELETE FROM produto WHERE name = 'Green Dress with details'",
        );
        await queryRunner.query(
          "DELETE FROM produto WHERE name = 'Green Dress with details",
        );
        await queryRunner.query(
          "DELETE FROM produto WHERE name = 'Green Dress with details'",
        );
        await queryRunner.query(
          "DELETE FROM produto WHERE name = 'Green Dress with details",
        );
        await queryRunner.query(
          "DELETE FROM produto WHERE name = 'Green Dress with details'",
        );
        await queryRunner.query(
          "DELETE FROM produto WHERE name = 'Green Dress with details",
        );
        await queryRunner.query(
          "DELETE FROM produto WHERE name = 'Green Dress with details'",
        );
        await queryRunner.query(
          "DELETE FROM produto WHERE name = 'Green Dress with details",
        );
        await queryRunner.query(
          "DELETE FROM produto WHERE name = 'Green Dress with details'",
        );
        await queryRunner.query(
          "DELETE FROM produto WHERE name = 'Green Dress with details",
        );
        await queryRunner.query(
          "DELETE FROM produto WHERE name = 'Green Dress with details'",
        );
        await queryRunner.query(
          "DELETE FROM produto WHERE name = 'Green Dress with details",
        );       
          
      }

}
