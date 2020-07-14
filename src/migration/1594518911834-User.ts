import {MigrationInterface, QueryRunner} from "typeorm";

export class User1594518911834 implements MigrationInterface {

    name = 'createUser1594518911834';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "user" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nome" character varying(100) NOT NULL, 
                "sobrenome" character varying(100) NOT NULL,
                "email" character varying(100) NOT NULL,
                "senha" character varying(100) NOT NULL,
                "cargo" character varying(100) NOT NULL,
                "rg" character varying(105) NOT NULL,
                "cpf" character varying(15) NOT NULL,
                "finished" boolean)`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
