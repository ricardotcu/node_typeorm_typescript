import {MigrationInterface, QueryRunner} from "typeorm";

export class addtableslider1594705221987 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "INSERT INTO slider (descricao, caminho) VALUES ('Green Dress with detailsGreen Dress with details', '../../assets/img/cliente/hero/hero_man.png')"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
