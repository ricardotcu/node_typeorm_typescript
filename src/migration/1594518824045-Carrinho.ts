import {MigrationInterface, QueryRunner} from "typeorm";

export class Carrinho1594518824045 implements MigrationInterface {

    name = 'createCarrinho1594518824045';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "carrinho" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nome" character varying(100) NOT NULL, 
                "sku" integer NOT NULL,
                "descricao" character varying(100) NOT NULL,
                "caminho" character varying(100) NOT NULL,
                "price" integer NOT NULL,
                "destaque" character varying(10) NOT NULL,
                "finished" boolean)`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "carrinho"`);
    }

}
