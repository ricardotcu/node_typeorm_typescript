import {MigrationInterface, QueryRunner} from "typeorm";

export class createtableblog1594702144046 implements MigrationInterface {

    name = 'createBlog1594702144046';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "blog" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nome" character varying(100) NOT NULL, 
                "descricao" character varying(100) NOT NULL,
                "caminho" character varying(100) NOT NULL,
                "finished" boolean)`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "blog"`);
    }

}
