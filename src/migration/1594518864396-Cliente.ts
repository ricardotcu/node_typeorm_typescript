import {MigrationInterface, QueryRunner} from "typeorm";

export class Cliente1594518864396 implements MigrationInterface {

    name = 'createCliente1594518864396';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "cliente" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nome" character varying(100) NOT NULL, 
                "descricao" character varying(100) NOT NULL,
                "valor" integer NOT NULL,
                "caminho" character varying(100) NOT NULL,
                "finished" boolean)`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cliente"`);
    }

}
