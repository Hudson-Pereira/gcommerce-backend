import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { LoginDto } from "./../auth/dto/login.dto";
import { UpdateUsuarioDto } from "./dto/update-usuario.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Prisma, Usuario } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { JwtPayload } from "src/auth/models/jwt.strategy";
import { Role } from "src/auth/models/role.enum";

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}
  roles: Role[];

  async create(data: Prisma.UsuarioUncheckedCreateInput): Promise<Usuario> {
    data.senha = await bcrypt.hash(data.senha, 10);
    try {
      const createdUser = await this.prisma.usuario.create({ data });
      createdUser.senha = undefined;
      return createdUser;
    } catch (error) {
      console.log(error);
      throw new HttpException("Email já em uso.", HttpStatus.BAD_REQUEST);
    }
  }

  async findByLogin(login: LoginDto): Promise<Usuario> {
    const user = await this.prisma.usuario.findFirst({
      where: {
        email: login.email,
      },
    });

    if (!user) {
      throw new HttpException(
        "Dados de login inválidos.",
        HttpStatus.NOT_FOUND
      );
    }

    const senhaIgual = await bcrypt.compare(login.senha, user.senha);

    if (!senhaIgual) {
      throw new HttpException(
        "Dados de login inválidos.",
        HttpStatus.UNAUTHORIZED
      );
    }

    return user;
  }

  async validateUser(payload: JwtPayload): Promise<Usuario> {
    const user = await this.prisma.usuario.findFirst({
      where: {
        email: payload.email,
      },
    });

    if (!user) {
      throw new HttpException("Token inválido.", HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  async findAll(): Promise<Usuario[]> {
    return await this.prisma.usuario.findMany();
  }

  async findOne(id: number): Promise<Usuario> {
    return await this.prisma.usuario.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateUsuarioDto): Promise<Usuario> {
    data.senha = await bcrypt.hash(data.senha, 10);
    return await this.prisma.usuario.update({ data, where: { id } });
  }

  async remove(id: number): Promise<Usuario> {
    return await this.prisma.usuario.delete({ where: { id } });
  }
}
