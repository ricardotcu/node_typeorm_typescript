import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Categoria } from '../entity/Categoria'

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

    @ManyToOne(type => Categoria, Categoria => Categoria.produtos)
    categoria: Categoria;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
}