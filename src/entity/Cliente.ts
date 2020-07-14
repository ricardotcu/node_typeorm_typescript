import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class Cliente{
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column("varchar")
    nome: string;

    @Column("varchar")
    email: string;

    @Column("varchar")
    senha: string;

    @Column("boolean", {
        default: false,
        nullable : true
    })
    finished: boolean;
}