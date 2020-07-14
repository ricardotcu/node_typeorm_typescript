import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Categorias{
    @PrimaryGeneratedColumn("uuid")
    id: number;
    
    @Column("varchar")
    caminho: string;

    @Column("boolean", {
        default: false,
        nullable : true
    })
    finished: boolean;
}
