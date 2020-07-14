import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class Produto{
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column("varchar")
    nome: string;

    @Column("varchar")
    descricao: string;

    @Column("integer") 
    valor: number;

    @Column("varchar") 
    caminho: string;

    @Column("varchar", {  nullable : true  })
    destaque: string;

    @Column("varchar", {  nullable : true  })
    camisas: string;

    @Column("varchar", {  nullable : true  })
    calcas: string;

    @Column("varchar", {  nullable : true  })
    sapatos: string;

    @Column("varchar", {  nullable : true  })
    oculos: string;

    @Column("varchar", {  nullable : true  })
    masc: string;

    @Column("boolean", {
        default: false,
        nullable : true
    })
    finished: boolean;
}