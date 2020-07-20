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

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
}
