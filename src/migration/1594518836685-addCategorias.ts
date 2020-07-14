import {MigrationInterface, QueryRunner} from "typeorm";

export class addCategorias1594518836685 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "INSERT INTO categoria (caminho) VALUES ('../../assets/img/cliente/categori/cat3.jpg')",
        );
        await queryRunner.query(
            "INSERT INTO categoria (caminho) VALUES ('../../assets/img/cliente/categori/cat2.jpg')",
        );
        await queryRunner.query(
            "INSERT INTO categoria (caminho) VALUES ('../../assets/img/cliente/categori/cat1.jpg')",
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          "DELETE FROM categoria WHERE caminho = '../../assets/img/cliente/categori/cat1.jpg'",
        );
        await queryRunner.query(
          "DELETE FROM categoria WHERE caminho = '../../assets/img/cliente/categori/cat1.jpg",
        );
        await queryRunner.query(
          "DELETE FROM categoria WHERE caminho = '../../assets/img/cliente/categori/cat1.jpg'",
        );
    }

}
