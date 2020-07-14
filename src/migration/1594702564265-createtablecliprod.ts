import {MigrationInterface, QueryRunner} from "typeorm";

export class createtablecliprod1594702564265 implements MigrationInterface {

    name = 'createtablecliprod1594702564265';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "cli_prod" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "id_cliente" uuid NOT NULL,
                "id_produto" uuid NOT NULL,
                "finished" boolean)`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cli_prod"`);
    }

}
