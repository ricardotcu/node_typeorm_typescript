import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Carrinho{
    @PrimaryGeneratedColumn("uuid")
    id: number;
    
    @Column("varchar")
    name: string

    @Column("integer")
    sku: number;
  
    @Column("varchar")
    descricao: string

    @Column("varchar")
    caminho: string
  
    @Column("integer")
    price: number

    @Column("varchar", {  nullable : true  })
    destaque: string;

    @Column("integer", {  nullable : true  })
    id_user: number;

    @Column("boolean", {
        default: false,
        nullable : true
    })
    finished: boolean;
}
