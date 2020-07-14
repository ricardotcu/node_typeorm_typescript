import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CatProd{
    @PrimaryGeneratedColumn("uuid")
    id: number;
    
    @Column("integer") 
    id_categoria: number;
  
    @Column("integer") 
    id_produto: number;

    @Column("boolean", {
        default: false,
        nullable : true
    })
    finished: boolean;
}
