import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class User{
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column("varchar")
    nome: string;

    @Column("varchar")
    email: string;

    @Column("varchar")
    senha: string;

    @Column("varchar")
    avatar: string;
    
    @Column("varchar")
    token: string;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
}