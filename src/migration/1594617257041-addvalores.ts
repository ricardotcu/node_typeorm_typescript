import {MigrationInterface, QueryRunner} from "typeorm";

export class addvalores1594617257041 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //peças masculinas fundo branco
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/oculos/oculos_masculinos.jpg', 'sim', 'sim', 'nao', 'nao', 'nao', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/calcas/calcas_masculinas1.jpg', 'nao', 'nao', 'sim', 'nao', 'nao', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/camisas/product6.png', 'sim', 'nao', 'nao', 'sim', 'nao', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/sapatos/sapatos_masculinos.jpeg', 'sim', 'nao', 'nao', 'nao', 'sim', 'sim')",
        );
        //peças masculinas fundo colorido
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/oculos/oculos_masculinos.jpg', 'sim', 'sim', 'nao', 'nao', 'nao', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/calcas/calcas_masculinas2.jpg', 'nao', 'nao', 'sim', 'nao', 'nao', 'sim')",
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
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/calcas/calcas_femininas1.jpg', 'nao', 'nao', 'sim', 'nao', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/camisas/product3.png', 'sim', 'nao', 'nao', 'sim', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/sapatos/sapatos_femininos2.jpg', 'sim', 'nao', 'nao', 'nao', 'sim', 'nao')",
        );
        //peças femininas fundo colorido
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/oculos/oculos_femininos1.jpg', 'sim', 'sim', 'nao', 'nao', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/calcas/calcas_femininas2.jpg', 'nao', 'nao', 'sim', 'nao', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/camisas/category_7.png', 'sim', 'nao', 'nao', 'sim', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/sapatos/sapatos_femininos.jpeg', 'sim', 'nao', 'nao', 'nao', 'sim', 'nao')",
        );
        //peças masculinas fundo branco
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/oculos/oculos_masculinos.jpg', 'sim', 'sim', 'nao', 'nao', 'nao', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/calcas/calcas_masculinas1.jpg', 'nao', 'nao', 'sim', 'nao', 'nao', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/camisas/product6.png', 'sim', 'nao', 'nao', 'sim', 'nao', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/sapatos/sapatos_masculinos.jpeg', 'sim', 'nao', 'nao', 'nao', 'sim', 'sim')",
        );
        //peças masculinas fundo colorido
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/oculos/oculos_masculinos.jpg', 'sim', 'sim', 'nao', 'nao', 'nao', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/calcas/calcas_masculinas2.jpg', 'nao', 'nao', 'sim', 'nao', 'nao', 'sim')",
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
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/calcas/calcas_femininas1.jpg', 'nao', 'nao', 'sim', 'nao', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/camisas/product3.png', 'sim', 'nao', 'nao', 'sim', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/sapatos/sapatos_femininos2.jpg', 'sim', 'nao', 'nao', 'nao', 'sim', 'nao')",
        );
        //peças femininas fundo colorido
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/oculos/oculos_femininos1.jpg', 'sim', 'sim', 'nao', 'nao', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/calcas/calcas_femininas2.jpg', 'nao', 'nao', 'sim', 'nao', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/camisas/category_7.png', 'sim', 'nao', 'nao', 'sim', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/sapatos/sapatos_femininos.jpeg', 'sim', 'nao', 'nao', 'nao', 'sim', 'nao')",
        );
        //peças masculinas fundo branco
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/oculos/oculos_masculinos.jpg', 'sim', 'sim', 'nao', 'nao', 'nao', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/calcas/calcas_masculinas1.jpg', 'nao', 'nao', 'sim', 'nao', 'nao', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/camisas/product6.png', 'sim', 'nao', 'nao', 'sim', 'nao', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/sapatos/sapatos_masculinos.jpeg', 'sim', 'nao', 'nao', 'nao', 'sim', 'sim')",
        );
        //peças masculinas fundo colorido
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/oculos/oculos_masculinos.jpg', 'sim', 'sim', 'nao', 'nao', 'nao', 'sim')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/calcas/calcas_masculinas2.jpg', 'nao', 'nao', 'sim', 'nao', 'nao', 'sim')",
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
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/calcas/calcas_femininas1.jpg', 'nao', 'nao', 'sim', 'nao', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/camisas/product3.png', 'sim', 'nao', 'nao', 'sim', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/sapatos/sapatos_femininos2.jpg', 'sim', 'nao', 'nao', 'nao', 'sim', 'nao')",
        );
        //peças femininas fundo colorido
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/oculos/oculos_femininos1.jpg', 'sim', 'sim', 'nao', 'nao', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/calcas/calcas_femininas2.jpg', 'nao', 'nao', 'sim', 'nao', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/camisas/category_7.png', 'sim', 'nao', 'nao', 'sim', 'nao', 'nao')",
        );
        await queryRunner.query(
            "INSERT INTO produto (nome, descricao, valor, caminho, destaque, oculos, calcas, camisas, sapatos, masc) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 100, '../../assets/imagens/sapatos/sapatos_femininos.jpeg', 'sim', 'nao', 'nao', 'nao', 'sim', 'nao')",
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }


}
