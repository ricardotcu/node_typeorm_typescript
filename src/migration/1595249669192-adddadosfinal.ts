import {MigrationInterface, QueryRunner} from "typeorm";

export class adddadosfinal1595249669192 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        `INSERT INTO "categorias_home" ("caminho") VALUES ('../../assets/images/calca.jpg')`
      );
      await queryRunner.query(
        `INSERT INTO "categorias_home" ("caminho") VALUES ('../../assets/images/camisa.png')`
      );
      await queryRunner.query(
        `INSERT INTO "categorias_home" ("caminho") VALUES ('../../assets/images/sapato.jpg')`
      );


      await queryRunner.query(
          `INSERT INTO "categoria" ("nome") VALUES ('calca')`
      );
      await queryRunner.query(
          `INSERT INTO "categoria" ("nome") VALUES ('camisa')`
      );
      await queryRunner.query(
          `INSERT INTO "categoria" ("nome") VALUES ('sapato')`
      );


      await queryRunner.query(
          `INSERT INTO "slider" ("descricao", "caminho") VALUES ('slider1', '../../assets/images/slider.png')`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
