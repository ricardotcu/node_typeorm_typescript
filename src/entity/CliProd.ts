import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CliProd{
    @PrimaryGeneratedColumn("uuid")
    id: number;
    
    @Column("uuid") 
    id_cliente: number;
  
    @Column("uuid") 
    id_produto: number;

    @Column("boolean", {
        default: false,
        nullable : true
    })
    finished: boolean;
}
