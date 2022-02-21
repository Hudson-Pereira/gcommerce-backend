import {
  IsNotEmpty,
  IsInt,
  IsString,
  IsDecimal,
  IsBoolean,
} from "class-validator";

export class CreateProdutosPrecosDto {
  @IsNotEmpty()
  @IsInt()
  codigo: number;

  @IsNotEmpty()
  produtoid: string;

  @IsNotEmpty()
  preco1: number;

  @IsNotEmpty()
  @IsInt()
  limitedesconto: number;

  @IsNotEmpty()
  @IsInt()
  promocaodesconto: number;

  @IsNotEmpty()
  precoliquido1: number;
}
