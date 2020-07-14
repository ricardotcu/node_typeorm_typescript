import {MigrationInterface, QueryRunner} from "typeorm";

export class addcolunaprodutos1594614954140 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE produto ADD oculos varchar(10);",
        );
        await queryRunner.query(
            "ALTER TABLE produto ADD calcas varchar(10);",
        );
        await queryRunner.query(
            "ALTER TABLE produto ADD camisas varchar(10);",
        );
        await queryRunner.query(
            "ALTER TABLE produto ADD sapatos varchar(10);",
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
