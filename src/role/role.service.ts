import { Injectable } from "@nestjs/common";
import { Prisma, Role } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.RoleCreateInput): Promise<Role> {
    return await this.prisma.role.create({ data });
  }

  async findAll(): Promise<Role[]> {
    return await this.prisma.role.findMany();
  }
}
