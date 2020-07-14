import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Class {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("varchar")
   nome: string;

  @Column("boolean", {
      default: false,
      nullable : true
  })
  finished: boolean;
}