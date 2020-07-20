import {MigrationInterface, QueryRunner} from "typeorm";

export class addprodutoseclientes1595249961849 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `INSERT INTO "cliente" ("nome", "email", "senha", "avatar", "token") VALUES ('rick', 'rick@rick.com', 'rick', '../../assets/images/cliente.png', 'ajfjhsjhjshjshfjshdjfhsjdsjdfhs')`
        );
        await queryRunner.query(
            `INSERT INTO "cliente" ("nome", "email", "senha", "avatar", "token") VALUES ('a', 'a@a.com', 'a', '../../assets/images/cliente.png', 'ajfjhsjhjshjshfjshdjfhsjdsjdfhs')`
        );

        await queryRunner.query(
            `INSERT INTO "produto" ("nome", "descricao", "valor", "caminho", "destaque", "categoriaId") VALUES ('sapato',
            'sapato sapato sapato sapato',
            '289',
            '../../assets/images/produto1.png',
            'sim',
            '0fca95a0-1c7e-48b6-a849-8f7b904dd292')`
        );
        await queryRunner.query(
            `INSERT INTO "produto" ("nome", "descricao", "valor", "caminho", "destaque", "categoriaId") VALUES ('camisa',
            'camisa camisa camisa camisa',
            '289',
            '../../assets/images/produto3.png',
            'sim',
            '49826f8a-0c89-421c-85e0-46117b3e436a')`
        );
        await queryRunner.query(
            `INSERT INTO "produto" ("nome", "descricao", "valor", "caminho", "destaque", "categoriaId") VALUES ('calca',
            'calca calca calca calca',
            '289',
            '../../assets/images/produto2.png',
            'sim',
            'e6872e2e-68ad-44d8-983a-32aa294b0ed7')`
        );

        await queryRunner.query(
            `INSERT INTO "produto" ("nome", "descricao", "valor", "caminho", "destaque", "categoriaId") VALUES ('sapato',
            'sapato sapato sapato sapato',
            '289',
            '../../assets/images/produto1.png',
            'sim',
            '0fca95a0-1c7e-48b6-a849-8f7b904dd292')`
        );
        await queryRunner.query(
            `INSERT INTO "produto" ("nome", "descricao", "valor", "caminho", "destaque", "categoriaId") VALUES ('camisa',
            'camisa camisa camisa camisa',
            '289',
            '../../assets/images/produto3.png',
            'sim',
            '49826f8a-0c89-421c-85e0-46117b3e436a')`
        );
        await queryRunner.query(
            `INSERT INTO "produto" ("nome", "descricao", "valor", "caminho", "destaque", "categoriaId") VALUES ('calca',
            'calca calca calca calca',
            '289',
            '../../assets/images/produto2.png',
            'sim',
            'e6872e2e-68ad-44d8-983a-32aa294b0ed7')`
        );

        await queryRunner.query(
            `INSERT INTO "produto" ("nome", "descricao", "valor", "caminho", "destaque", "categoriaId") VALUES ('sapato',
            'sapato sapato sapato sapato',
            '289',
            '../../assets/images/produto1.png',
            'sim',
            '0fca95a0-1c7e-48b6-a849-8f7b904dd292')`
        );
        await queryRunner.query(
            `INSERT INTO "produto" ("nome", "descricao", "valor", "caminho", "destaque", "categoriaId") VALUES ('camisa',
            'camisa camisa camisa camisa',
            '289',
            '../../assets/images/produto3.png',
            'sim',
            '49826f8a-0c89-421c-85e0-46117b3e436a')`
        );
        await queryRunner.query(
            `INSERT INTO "produto" ("nome", "descricao", "valor", "caminho", "destaque", "categoriaId") VALUES ('calca',
            'calca calca calca calca',
            '289',
            '../../assets/images/produto2.png',
            'sim',
            'e6872e2e-68ad-44d8-983a-32aa294b0ed7')`
        );

        await queryRunner.query(
            `INSERT INTO "produto" ("nome", "descricao", "valor", "caminho", "destaque", "categoriaId") VALUES ('sapato',
            'sapato sapato sapato sapato',
            '289',
            '../../assets/images/produto1.png',
            'nao',
            '0fca95a0-1c7e-48b6-a849-8f7b904dd292')`
        );
        await queryRunner.query(
            `INSERT INTO "produto" ("nome", "descricao", "valor", "caminho", "destaque", "categoriaId") VALUES ('camisa',
            'camisa camisa camisa camisa',
            '289',
            '../../assets/images/produto3.png',
            'nao',
            '49826f8a-0c89-421c-85e0-46117b3e436a')`
        );
        await queryRunner.query(
            `INSERT INTO "produto" ("nome", "descricao", "valor", "caminho", "destaque", "categoriaId") VALUES ('calca',
            'calca calca calca calca',
            '289',
            '../../assets/images/produto2.png',
            'nao',
            'e6872e2e-68ad-44d8-983a-32aa294b0ed7')`
        );
        await queryRunner.query(
            `INSERT INTO "produto" ("nome", "descricao", "valor", "caminho", "destaque", "categoriaId") VALUES ('sapato',
            'sapato sapato sapato sapato',
            '289',
            '../../assets/images/produto1.png',
            'nao',
            '0fca95a0-1c7e-48b6-a849-8f7b904dd292')`
        );
        await queryRunner.query(
            `INSERT INTO "produto" ("nome", "descricao", "valor", "caminho", "destaque", "categoriaId") VALUES ('camisa',
            'camisa camisa camisa camisa',
            '289',
            '../../assets/images/produto3.png',
            'nao',
            '49826f8a-0c89-421c-85e0-46117b3e436a')`
        );
        await queryRunner.query(
            `INSERT INTO "produto" ("nome", "descricao", "valor", "caminho", "destaque", "categoriaId") VALUES ('calca',
            'calca calca calca calca',
            '289',
            '../../assets/images/produto2.png',
            'nao',
            'e6872e2e-68ad-44d8-983a-32aa294b0ed7')`
        );
        await queryRunner.query(
            `INSERT INTO "produto" ("nome", "descricao", "valor", "caminho", "destaque", "categoriaId") VALUES ('sapato',
            'sapato sapato sapato sapato',
            '289',
            '../../assets/images/produto1.png',
            'nao',
            '0fca95a0-1c7e-48b6-a849-8f7b904dd292')`
        );
        await queryRunner.query(
            `INSERT INTO "produto" ("nome", "descricao", "valor", "caminho", "destaque", "categoriaId") VALUES ('camisa',
            'camisa camisa camisa camisa',
            '289',
            '../../assets/images/produto3.png',
            'nao',
            '49826f8a-0c89-421c-85e0-46117b3e436a')`
        );
        await queryRunner.query(
            `INSERT INTO "produto" ("nome", "descricao", "valor", "caminho", "destaque", "categoriaId") VALUES ('calca',
            'calca calca calca calca',
            '289',
            '../../assets/images/produto2.png',
            'nao',
            'e6872e2e-68ad-44d8-983a-32aa294b0ed7')`
        );
        await queryRunner.query(
            `INSERT INTO "produto" ("nome", "descricao", "valor", "caminho", "destaque", "categoriaId") VALUES ('sapato',
            'sapato sapato sapato sapato',
            '289',
            '../../assets/images/produto1.png',
            'nao',
            '0fca95a0-1c7e-48b6-a849-8f7b904dd292')`
        );
        await queryRunner.query(
            `INSERT INTO "produto" ("nome", "descricao", "valor", "caminho", "destaque", "categoriaId") VALUES ('camisa',
            'camisa camisa camisa camisa',
            '289',
            '../../assets/images/produto3.png',
            'nao',
            '49826f8a-0c89-421c-85e0-46117b3e436a')`
        );
        await queryRunner.query(
            `INSERT INTO "produto" ("nome", "descricao", "valor", "caminho", "destaque", "categoriaId") VALUES ('calca',
            'calca calca calca calca',
            '289',
            '../../assets/images/produto2.png',
            'nao',
            'e6872e2e-68ad-44d8-983a-32aa294b0ed7')`
        );
        await queryRunner.query(
            `INSERT INTO "produto" ("nome", "descricao", "valor", "caminho", "destaque", "categoriaId") VALUES ('sapato',
            'sapato sapato sapato sapato',
            '289',
            '../../assets/images/produto1.png',
            'nao',
            '0fca95a0-1c7e-48b6-a849-8f7b904dd292')`
        );
        await queryRunner.query(
            `INSERT INTO "produto" ("nome", "descricao", "valor", "caminho", "destaque", "categoriaId") VALUES ('camisa',
            'camisa camisa camisa camisa',
            '289',
            '../../assets/images/produto3.png',
            'nao',
            '49826f8a-0c89-421c-85e0-46117b3e436a')`
        );
        await queryRunner.query(
            `INSERT INTO "produto" ("nome", "descricao", "valor", "caminho", "destaque", "categoriaId") VALUES ('calca',
            'calca calca calca calca',
            '289',
            '../../assets/images/produto2.png',
            'nao',
            'e6872e2e-68ad-44d8-983a-32aa294b0ed7')`
        );
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
