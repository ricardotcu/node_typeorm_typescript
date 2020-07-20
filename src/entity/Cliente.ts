import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { Produto } from '../entity/Produto';


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

    @Column("varchar")
    avatar: string;

    @Column("varchar")
    token: string;

    @ManyToMany(type => Produto)
    @JoinTable()
    carrinho: Produto[];

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
}