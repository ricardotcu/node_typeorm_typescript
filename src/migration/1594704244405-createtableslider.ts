import {MigrationInterface, QueryRunner} from "typeorm";

export class createtableslider1594704244405 implements MigrationInterface {

    name = 'createtableslider1594704244405';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "slider" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "descricao" character varying(100) NOT NULL,
                "caminho" character varying(100) NOT NULL,
                "finished" boolean)`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "slider"`);
    }

}
