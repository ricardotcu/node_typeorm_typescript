import {MigrationInterface, QueryRunner} from "typeorm";

export class Categorias1594518841590 implements MigrationInterface {

    name = 'createCategoria1594518841590';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "categoria" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "caminho" character varying(100) NOT NULL,
                "finished" boolean)`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "categoria"`);
    }

}
