import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'tb_postagens'})
export class Postagem {


    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    titulo: string;

    @UpdateDateColumn()
    data: Date;
}