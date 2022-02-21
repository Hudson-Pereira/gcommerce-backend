import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UseGuards,
} from "@nestjs/common";
import { ProdutosprecosService } from "./produtosprecos.service";
import { CreateProdutosPrecosDto } from "./dto/create-produtospreco.dto";
import { UpdateProdutosprecoDto } from "./dto/update-produtospreco.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import xlsx from 'node-xlsx'
import { AuthGuard } from "@nestjs/passport";

@Controller("produtosprecos")
export class ProdutosprecosController {
  constructor(private readonly produtosprecosService: ProdutosprecosService) {}

  @Post()
  @UseGuards(AuthGuard("jwt"))
  create(@Body() createProdutosprecoDto: CreateProdutosPrecosDto) {
    return this.produtosprecosService.createPrisma(createProdutosprecoDto);
  }

  @Get()
  @UseGuards(AuthGuard("jwt"))
  findAll() {
    return this.produtosprecosService.findAllPrisma();
  }

  @Get(":id")
  @UseGuards(AuthGuard("jwt"))
  findOne(@Param("id") id: string) {
    return this.produtosprecosService.findOnePrisma(+id);
  }

  @Patch(":id")
  @UseGuards(AuthGuard("jwt"))
  update(
    @Param("id") id: string,
    @Body() updateProdutosprecoDto: UpdateProdutosprecoDto
  ) {
    return this.produtosprecosService.updatePrisma(+id, updateProdutosprecoDto);
  }

  @Delete(":id")
  @UseGuards(AuthGuard("jwt"))
  remove(@Param("id") id: string) {
    return this.produtosprecosService.removePrisma(+id);
  }

  @Post('upload')
  @UseGuards(AuthGuard("jwt"))
  @UseInterceptors(FileInterceptor('upload'))
  uploadFile(@UploadedFile()file: Express.Multer.File): Promise<void> {
    const workSheetsFromFile = xlsx.parse(file.path);
    const dados = workSheetsFromFile[0].data
    return this.produtosprecosService.uploadFilePrisma(dados)
  }

}
