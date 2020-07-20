import { MigrationInterface, QueryRunner } from "typeorm";

export class createtables1595232877090 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        `CREATE TABLE "blog" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "nome" character varying(100) NOT NULL, 
        "descricao" character varying(250) NOT NULL,  
        "caminho" character varying(100) NOT NULL,
        CONSTRAINT "PK_239512aefbb11a5b2fa92696828" PRIMARY KEY ("id"))`,
      );

      await queryRunner.query(
        `CREATE TABLE "categorias_home" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "caminho" character varying(100) NOT NULL,
        CONSTRAINT "PK_239512aefbb11a5b2fa92696828" PRIMARY KEY ("id"))`,
      );

      await queryRunner.query(
          `CREATE TABLE "instagram" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
          "caminho" character varying(100) NOT NULL,
          CONSTRAINT "PK_239512aefbb11a5b2fa92696828" PRIMARY KEY ("id"))`,
      );

      await queryRunner.query(
        `CREATE TABLE "slider" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "descricao" character varying(250) NOT NULL,  
        "caminho" character varying(100) NOT NULL,
        CONSTRAINT "PK_239512aefbb11a5b2fa92696828" PRIMARY KEY ("id"))`,
      );

      await queryRunner.query(
        `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "nome" character varying(100) NOT NULL,
        "email" character varying(100) NOT NULL,
        "senha" character varying(100) NOT NULL,
        "avatar" character varying(100) NOT NULL,
        "token" character varying(300) NOT NULL,
        CONSTRAINT "PK_239512aefbb11a5b2fa92696828" PRIMARY KEY ("id"))`,
      );

      await queryRunner.query(
        `CREATE TABLE "produto" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "nome" character varying(100) NOT NULL,  
        "descricao" character varying(150) NOT NULL,  
        "valor" integer NOT NULL,  
        "caminho" character varying(100) NOT NULL,
        "destaque" character varying(5) NOT NULL,
        CONSTRAINT "PK_239512aefbb11a5b2fa92696828" PRIMARY KEY ("id"))`,
      );


      await queryRunner.query(
        `CREATE TABLE "categoria" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "nome" character varying(250) NOT NULL,
        CONSTRAINT "PK_239512aefbb11a5b2fa92696828" PRIMARY KEY ("id"))`,
      );
      
      await queryRunner.query(
        `CREATE TABLE "cliente" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "nome" character varying(100) NOT NULL,
        "email" character varying(100) NOT NULL,
        "senha" character varying(100) NOT NULL,
        "avatar" character varying(100) NOT NULL,
        "token" character varying(300) NOT NULL,
        CONSTRAINT "PK_239512aefbb11a5b2fa92696828" PRIMARY KEY ("id"))`,
      );

      await queryRunner.query(
        `ALTER TABLE "produto" ADD "categoriaId" uuid;`
      );

      await queryRunner.query(
        `ALTER TABLE "produto" ADD CONSTRAINT "FK_2652456e912c983cde73d3281db" FOREIGN KEY ("categoriaId") REFERENCES "categoria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
      );

      await queryRunner.query(
        `CREATE TABLE "carrinho" ("clienteId" uuid NOT NULL, "produtoId" uuid NOT NULL, CONSTRAINT "PK_3ef0759852caaefb9bac7cf913e" PRIMARY KEY ("clienteId", "produtoId"))`
      );
      await queryRunner.query(
        `ALTER TABLE "carrinho" ADD CONSTRAINT "FK_ccb4ae4609bfbf4d022560a3f8c" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
      );
      await queryRunner.query(
        `ALTER TABLE "carrinho" ADD CONSTRAINT "FK_9a616bdfff1c46bddeb8ad78dbf" FOREIGN KEY ("produtoId") REFERENCES "produto"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
      );
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
