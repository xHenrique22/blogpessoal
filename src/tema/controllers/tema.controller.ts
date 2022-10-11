import { HttpStatus, ParseIntPipe } from "@nestjs/common";
import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { HttpCode } from "@nestjs/common/decorators/http/http-code.decorator";
import { Delete, Get, Post, Put } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { Body, Param } from "@nestjs/common/decorators/http/route-params.decorator";
import { Tema } from "../entities/tema.entity";
import { TemaService } from "../services/tema.service";

@Controller('/tema')
export class TemaController {
    constructor (private readonly temaService: TemaService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Tema[]>{
        return this.temaService.findAll()
    }

@Get('/:id')
@HttpCode(HttpStatus.OK)
findById (@Param('id', ParseIntPipe)id: number): Promise<Tema>{
    return this.temaService.findById(id)
}

@Get('/:descricao/:descricao')
@HttpCode(HttpStatus.OK)
findByDescricao(@Param('descricao')descricao: string): Promise<Tema[]> {
    return this.temaService.findByDescricao(descricao)
}

@Post()
@HttpCode(HttpStatus.CREATED)
create( @Body()tema: Tema): Promise<Tema>{
    return this.temaService.create(tema);

}

@Put()
@HttpCode(HttpStatus.OK)
update (@Body()tema: Tema): Promise<Tema> {
return this.temaService.update(tema);
}

@Delete('/:id')
@HttpCode(HttpStatus.NO_CONTENT)
delete(@Param('id', ParseIntPipe)id: number){
return this.temaService.delete(id);
}
}