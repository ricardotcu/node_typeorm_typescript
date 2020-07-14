import {MigrationInterface, QueryRunner} from "typeorm";

export class Instagram1594518877254 implements MigrationInterface {

    name = 'createCliente1594518877254';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "instagram" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "caminho" character varying(100) NOT NULL,
                "finished" boolean)`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "instagram"`);
    }

}
