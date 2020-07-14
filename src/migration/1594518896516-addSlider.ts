import {MigrationInterface, QueryRunner} from "typeorm";

export class addSlider1594518896516 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          "INSERT INTO slider (descricao, caminho) VALUES ('Green Dress with detailsGreen Dress with details', '../../assets/img/cliente/hero/hero_man.png')",
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          "DELETE FROM slider WHERE descricao = 'Green Dress with detailsGreen Dress with details'",
        );
    }

}
