import {Injectable } from "@nestjs/common";
import { Produto } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProdutoDto } from "./dto/create-produto.dto";
import { UpdateProdutoDto } from "./dto/update-produto.dto";


@Injectable()
export class ProdutoService {
  constructor(private prisma: PrismaService) {}

  async createPrisma(createProdutoDto: CreateProdutoDto): Promise<Produto> {
    return await this.prisma.produto.create({
      data: { ...createProdutoDto },
    });
  }

  async findAllPrisma(): Promise<Produto[]> {
    return await this.prisma.produto.findMany();
  }

  async findOnePrisma(id: number): Promise<Produto> {
    return await this.prisma.produto.findUnique({ where: { id } });
  }

  async updatePrisma(
    id: number,
    _updateProdutoDto: UpdateProdutoDto
  ): Promise<Produto> {
    return await this.prisma.produto.update({
      data: { ..._updateProdutoDto },
      where: { id },
    });
  }

  async removePrisma(id: number) {
    return await this.prisma.produto.delete({ where: { id } });
  }

async uploadFilePrisma(dados:any) {
  if (!dados) {
    console.log("vazio")
  }
  const dado = dados.shift()
  dados.map(async(dados) => {(
   await this.prisma.produto.update({
       data: { produto1: dados[0],
               nome: dados[1],
               descricao: dados[2],
               colecao: dados[3],
               grife: dados[4],
               disponivel: dados[5] },
       where: { produto1: dados[0] },
     })
  )})
}

}