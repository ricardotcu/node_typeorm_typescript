import {MigrationInterface, QueryRunner} from "typeorm";

export class addtableblog1594705235228 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "INSERT INTO blog (nome, descricao, caminho) VALUES ('Green Dress with details', 'Green Dress with detailsGreen Dress with details', 'err')"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
