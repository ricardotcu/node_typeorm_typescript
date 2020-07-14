import {MigrationInterface, QueryRunner} from "typeorm";

export class addtableinstagram1594705227409 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "INSERT INTO instagram (caminho) VALUES ('err')",
        );
        await queryRunner.query(
            "INSERT INTO instagram (caminho) VALUES ('err')",
        );
        await queryRunner.query(
            "INSERT INTO instagram (caminho) VALUES ('err')",
        );
        await queryRunner.query(
            "INSERT INTO instagram (caminho) VALUES ('err')",
        );
        await queryRunner.query(
            "INSERT INTO instagram (caminho) VALUES ('err')",
        );
        await queryRunner.query(
            "INSERT INTO instagram (caminho) VALUES ('err')"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
