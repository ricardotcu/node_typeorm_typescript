import {MigrationInterface, QueryRunner} from "typeorm";

export class Produto1594518758953 implements MigrationInterface {

    name = 'createProduto1594518758953';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "produto" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nome" character varying(100) NOT NULL, 
                "descricao" character varying(100) NOT NULL,
                "valor" integer NOT NULL,
                "caminho" character varying(100) NOT NULL,
                "destaque" character varying(10),
                "finished" boolean)`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "produto"`);
    }

}
