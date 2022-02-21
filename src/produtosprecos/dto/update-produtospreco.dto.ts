import { PartialType } from "@nestjs/swagger";
import { CreateProdutosPrecosDto } from "./create-produtospreco.dto";

export class UpdateProdutosprecoDto extends PartialType(
  CreateProdutosPrecosDto
) {}
