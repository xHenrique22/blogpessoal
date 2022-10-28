import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Tema } from "src/tema/entities/tema.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'tb_postagens'})
export class Postagem {


    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @ApiProperty()
    @Column({length: 100, nullable: false})
    titulo: string;

    @IsNotEmpty()
    @ApiProperty()
    @Column({length: 100, nullable: false})
    texto: string;


    @UpdateDateColumn()
    @ApiProperty()
    data: Date;

    @ApiProperty({ type: () => Tema })  
    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE",

    })
    tema: Tema;

    @ApiProperty({ type: () => Usuario })  
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario
}