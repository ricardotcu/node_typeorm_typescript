import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Slider{
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column("varchar")
    descricao: string;

    @Column("varchar")
    caminho: string;

    @Column("boolean", {
        default: false,
        nullable : true
    })
    finished: boolean;
}
