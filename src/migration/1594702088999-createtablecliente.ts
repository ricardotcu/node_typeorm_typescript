import {MigrationInterface, QueryRunner} from "typeorm";

export class createtablecliente1594702088999 implements MigrationInterface {

    name = 'createCliente1594702088999';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "cliente" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nome" character varying(100) NOT NULL,
                "email" character varying(100) NOT NULL,
                "senha" character varying(100) NOT NULL,
                "finished" boolean)`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cliente"`);
    }

}
