import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
} from "class-validator";

export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: "Bluemer",
    description: `O nome será utilizado para cadastrar um usuário`,
  })
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    example: "Bluemer@Bluemer",
    description: `O email será utilizado para cadastrar um dado do usuário`,
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: "Bluemer1234",
    description: `A senha será utilizada para cadastrar um dado do usuário`,
  })
  senha: string;

  @IsNotEmpty()
  @IsInt()
  isAdmin: number;
}
