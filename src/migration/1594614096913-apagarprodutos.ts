import {MigrationInterface, QueryRunner} from "typeorm";

export class apagarprodutos1594614096913 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "DELETE FROM produto WHERE nome = 'Green Dress with details'",
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
