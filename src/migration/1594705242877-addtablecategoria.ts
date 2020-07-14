import {MigrationInterface, QueryRunner} from "typeorm";

export class addtablecategoria1594705242877 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "INSERT INTO categorias (caminho) VALUES ('../../assets/img/cliente/categori/cat3.jpg')",
        );
        await queryRunner.query(
            "INSERT INTO categorias (caminho) VALUES ('../../assets/img/cliente/categori/cat2.jpg')",
        );
        await queryRunner.query(
            "INSERT INTO categorias (caminho) VALUES ('../../assets/img/cliente/categori/cat1.jpg')",
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
