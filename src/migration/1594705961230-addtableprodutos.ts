import {MigrationInterface, QueryRunner} from "typeorm";

export class addtableprodutos1594705961230 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //peças masculinas fundo branco
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/oculos/oculos_masculinos.jpg', 'n', 'sim', 'nao', 'nao', 'nao', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/calcas/calcas_masculinas1.jpg', 'n', 'nao', 'sim', 'nao', 'nao', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/camisas/product6.png', 'sim', 'nao', 'nao', 'sim', 'nao', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/sapatos/sapatos_masculinos.jpeg', 'sim', 'nao', 'nao', 'nao', 'sim', 'sim')",
        );
        //peças masculinas fundo colorido
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/oculos/oculos_masculinos.jpg', 'n', 'sim', 'nao', 'nao', 'nao', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/calcas/calcas_masculinas2.jpg', 'n', 'nao', 'sim', 'nao', 'nao', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/camisas/category_6.png', 'sim', 'nao', 'nao', 'sim', 'nao', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/sapatos/sapatos_masculinos.jpeg', 'sim', 'nao', 'nao', 'nao', 'sim', 'sim')",
        );

        //peças femininas fundo branco
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/oculos/oculos_femininos2.jpg', 'sim', 'sim', 'nao', 'nao', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/calcas/calcas_femininas1.jpg', 'n', 'nao', 'sim', 'nao', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/camisas/product3.png', 'n', 'nao', 'nao', 'sim', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/sapatos/sapatos_femininos2.jpg', 'sim', 'nao', 'nao', 'nao', 'sim', 'nao')",
        );
        //peças femininas fundo colorido
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/oculos/oculos_femininos1.jpg', 'sim', 'sim', 'nao', 'nao', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/calcas/calcas_femininas2.jpg', 'n', 'nao', 'sim', 'nao', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/camisas/category_7.png', 'n', 'nao', 'nao', 'sim', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/sapatos/sapatos_femininos.jpeg', 'sim', 'nao', 'nao', 'nao', 'sim', 'nao')",
        );

        //segunda leva
        //peças masculinas fundo branco
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/oculos/oculos_masculinos.jpg', 'n', 'sim', 'nao', 'nao', 'nao', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/calcas/calcas_masculinas1.jpg', 'n', 'nao', 'sim', 'nao', 'nao', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/camisas/product6.png', 'n', 'nao', 'nao', 'sim', 'nao', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/sapatos/sapatos_masculinos.jpeg', 'n', 'nao', 'nao', 'nao', 'sim', 'sim')",
        );
        //peças masculinas fundo colorido
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/oculos/oculos_masculinos.jpg', 'n', 'sim', 'nao', 'nao', 'nao', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/calcas/calcas_masculinas2.jpg', 'n', 'nao', 'sim', 'nao', 'nao', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/camisas/category_6.png', 'n', 'nao', 'nao', 'sim', 'nao', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/sapatos/sapatos_masculinos.jpeg', 'n', 'nao', 'nao', 'nao', 'sim', 'sim')",
        );

        //peças femininas fundo branco
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/oculos/oculos_femininos2.jpg', 'n', 'sim', 'nao', 'nao', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/calcas/calcas_femininas1.jpg', 'n', 'nao', 'sim', 'nao', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/camisas/product3.png', 'n', 'nao', 'nao', 'sim', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/sapatos/sapatos_femininos2.jpg', 'n', 'nao', 'nao', 'nao', 'sim', 'nao')",
        );
        //peças femininas fundo colorido
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/oculos/oculos_femininos1.jpg', 'n', 'sim', 'nao', 'nao', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/calcas/calcas_femininas2.jpg', 'n', 'nao', 'sim', 'nao', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/camisas/category_7.png', 'n', 'nao', 'nao', 'sim', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/sapatos/sapatos_femininos.jpeg', 'n', 'nao', 'nao', 'nao', 'sim', 'nao')",
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
