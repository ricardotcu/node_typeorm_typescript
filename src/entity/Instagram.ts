import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Instagram{
    @PrimaryGeneratedColumn("uuid")
    id: number;
    
    @Column("varchar")
    caminho: string;
    
    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
}
