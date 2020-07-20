import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Categorias_Home{
    @PrimaryGeneratedColumn("uuid")
    id: number;
    
    @Column("varchar")
    caminho: string;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
}
