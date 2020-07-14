import {MigrationInterface, QueryRunner} from "typeorm";

export class addInstagram1594518880473 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "INSERT INTO instagram (caminho) VALUES ('../../assets/img/instagram-img-05.jpg')",
        );
        await queryRunner.query(
            "INSERT INTO instagram (caminho) VALUES ('../../assets/img/instagram-img-08.jpg')",
        );
        await queryRunner.query(
            "INSERT INTO instagram (caminho) VALUES ('../../assets/img/instagram-img-04.jpg')",
        );
        await queryRunner.query(
            "INSERT INTO instagram (caminho) VALUES ('../../assets/img/instagram-img-07.jpg')",
        );
        await queryRunner.query(
            "INSERT INTO instagram (caminho) VALUES ('../../assets/img/instagram-img-03.jpg')",
        );
        await queryRunner.query(
            "INSERT INTO instagram (caminho) VALUES ('../../assets/img/instagram-img-01.jpg')",
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          "DELETE FROM instagram WHERE caminho = '../../assets/img/instagram-img-05.jpg''",
        );
        await queryRunner.query(
          "DELETE FROM instagram WHERE caminho = '../../assets/img/instagram-img-08.jpg'",
        );
        await queryRunner.query(
          "DELETE FROM instagram WHERE caminho = '../../assets/img/instagram-img-04.jpg''",
        );
        await queryRunner.query(
          "DELETE FROM instagram WHERE caminho = '../../assets/img/instagram-img-07.jpg'",
        );
        await queryRunner.query(
          "DELETE FROM instagram WHERE caminho = '../../assets/img/instagram-img-03.jpg''",
        );
        await queryRunner.query(
          "DELETE FROM instagram WHERE caminho = '../../assets/img/instagram-img-01.jpg'",
        );
    }

}
