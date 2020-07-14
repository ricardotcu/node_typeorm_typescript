import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Teste{
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column("varchar")
    nome: string;
}
