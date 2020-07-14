import {MigrationInterface, QueryRunner} from "typeorm";

export class addcolunamasc1594616838009 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE produto ADD masc varchar(10);"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
