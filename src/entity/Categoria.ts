import {
  Entity,
  PrimaryGeneratedColumn,
  Column, CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import { Produto } from '../entity/Produto';

@Entity()
export class Categoria{
    @PrimaryGeneratedColumn("uuid")
    id: number;
    
    @Column("varchar")
    nome: string;
  
    @OneToMany(type => Produto, produto => produto.categoria)
    produtos: Produto[];

}
