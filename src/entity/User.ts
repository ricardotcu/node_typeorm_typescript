import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class User{
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column("varchar")
    nome: string;

    @Column("varchar", {  nullable : true  })
    sobrenome: string;

    @Column("varchar")
    email: string;

    @Column("varchar")
    senha: string;

    @Column("varchar", {  nullable : true  })
    cargo: string;

    @Column("varchar", {  nullable : true  })
    rg: string;

    @Column("varchar", {  nullable : true  })
    cpf: string;

    @Column("boolean", {
        default: false,
        nullable : true
    })
    finished: boolean;
}