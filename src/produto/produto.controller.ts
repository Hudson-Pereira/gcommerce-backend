import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { ProdutoService } from "./produto.service";
import { CreateProdutoDto } from "./dto/create-produto.dto";
import { UpdateProdutoDto } from "./dto/update-produto.dto";
import { AuthGuard } from "@nestjs/passport";
import { ApiTags } from "@nestjs/swagger";
import { Express } from "express";
import { FileInterceptor } from "@nestjs/platform-express";
import xlsx from "node-xlsx";

@ApiTags("Products")
@Controller("produto")
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  @UseGuards(AuthGuard("jwt"))
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtoService.createPrisma(createProdutoDto);
  }

  @Get()
  @UseGuards(AuthGuard("jwt"))
  findAll() {
    return this.produtoService.findAllPrisma();
  }

  @Get(":id")
  @UseGuards(AuthGuard("jwt"))
  findOne(@Param("id") id: string) {
    return this.produtoService.findOnePrisma(+id);
  }

  @Patch(":id")
  @UseGuards(AuthGuard("jwt"))
  update(@Param("id") id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtoService.updatePrisma(+id, updateProdutoDto);
  }

  @Post("upload")
  @UseGuards(AuthGuard("jwt"))
  @UseInterceptors(FileInterceptor("upload"))
  uploadFile(@UploadedFile() file: Express.Multer.File): Promise<void> {
    const workSheetsFromFile = xlsx.parse(file.path);
    const dados = workSheetsFromFile[0].data
    return this.produtoService.uploadFilePrisma(dados);
  }

  @Delete(":id")
  @UseGuards(AuthGuard("jwt"))
  remove(@Param("id") id: string) {
    return this.produtoService.removePrisma(+id);
  }
}
