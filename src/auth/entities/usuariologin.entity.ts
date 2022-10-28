import { ApiProperty } from "@nestjs/swagger"

export class UsuarioLogin {

    @ApiProperty()
    public user: string

    @ApiProperty()
    public password: string

}