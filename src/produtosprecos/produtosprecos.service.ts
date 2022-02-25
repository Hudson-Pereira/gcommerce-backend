import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ProdutosPrecos } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProdutosPrecosDto } from "./dto/create-produtospreco.dto";
import { UpdateProdutosprecoDto } from "./dto/update-produtospreco.dto";

@Injectable()
export class ProdutosprecosService {
  constructor(private prisma: PrismaService) {}

  async createPrisma(
    createProdutosprecosDto: CreateProdutosPrecosDto
  ): Promise<ProdutosPrecos> {
    try{
      const preco = await this.prisma.produtosPrecos.create({
      data: { ...createProdutosprecosDto },
    });
    return preco;
  } catch(error) {
    console.error(error)
      throw new HttpException("Erro de cadastro, favor tente novamente.", HttpStatus.BAD_REQUEST);    
    }
  }

  async findAllPrisma(): Promise<ProdutosPrecos[]> {
    try{
    const total = await this.prisma.produtosPrecos.findMany();
    console.log(`Temos ${total.length} preços de produtos.`)
    if(!total) {
      console.log("Nenhum item encontrado.")
      throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
    
    return total;
      }
    } catch(error) {
      console.error(error)
      throw new HttpException("ERRO", HttpStatus.BAD_REQUEST);    
    }
  }

  async findOnePrisma(id: number): Promise<ProdutosPrecos> {
    try {
    const preco = await this.prisma.produtosPrecos.findUnique({ where: { id } });
      if(!preco){
        console.log("Nenhum item encontrado.")
      throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
      }
    return preco;
    } catch(error){
      console.error(error)
      throw new HttpException("ERRO", HttpStatus.BAD_REQUEST);
    }
  }

  async updatePrisma(
    id: number,
    _updateProdutosprecoDto: UpdateProdutosprecoDto
  ): Promise<ProdutosPrecos> {
    try{
    const preco = await this.prisma.produtosPrecos.update({
      data: { ..._updateProdutosprecoDto },
      where: { id },
    });
    if(!preco) {
      console.log("Nenhum item encontrado.")
      throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
    }
    return preco;
  }catch(error){
    console.error(error)
    throw new HttpException("ERRO", HttpStatus.BAD_REQUEST); 
  }
  }

  async removePrisma(id: number) {
    try{
    const preco = await this.prisma.produtosPrecos.delete({ where: { id } });
    if (!preco) {
      console.log("Nenhum item encontrado.")
      throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
    }
    return preco;
    } catch(error){
      console.error(error)
      throw new HttpException("Erro ao excluir, tente novamente", HttpStatus.BAD_REQUEST);
    }
  }

  async uploadFilePrisma(dados: any) {
    if (!dados) {
      console.log("Item vazio.")
       throw new HttpException("Nenhum item encontrado", HttpStatus.NOT_FOUND);
    }
    const dado = dados.shift()
    try{
    dados.map(async(dados) => {(
      await this.prisma.produtosPrecos.update({ 
        where: {produtoid: dados[0] },
        data: { 
          produtoid: dados[0],
          promocaodesconto: dados[1],
          precoliquido1: dados[2],
          preco1: dados[3] },
      
    })
    )})
    } catch(error){
      console.error(error)
      throw new HttpException("ERRO", HttpStatus.BAD_REQUEST);
    }
  }
}
