import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsInt,
  IsString,
  } from "class-validator";

export class CreateProdutoDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: "123456",
    description: `O campo produto será utilizado para cadastrar um dado único para o produto`,
  })
  produto1: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: "calça",
    description: `O campo nome será utilizado para cadastrar um dado para o produto`,
  })
  nome: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: "calça preta, tamanho M....",
    description: `O campo descricao será utilizado para cadastrar informações sobre o produto`,
  })
  descricao: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: "Roupa Masculina",
    description: `O campo colecao será utilizado para cadastrar o tipo do produto`,
  })
  colecao: string;

  @IsNotEmpty()
  @IsString()
  grife: string;

  @IsNotEmpty()
  @IsInt()
  disponivel: number;
}
