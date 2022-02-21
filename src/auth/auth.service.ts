import { Roles } from "./decorators/roles.decorador";
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsuarioService } from "src/usuario/usuario.service";
import { LoginDto } from "./dto/login.dto";
import { JwtPayload } from "./models/jwt.strategy";
import { Usuario } from "@prisma/client";

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService
  ) {}

  async login(loginUserDto: LoginDto) {
    const user = await this.usuarioService.findByLogin(loginUserDto);

    const token = this._createToken(user);
    return {
      idUser: user.id,
      tipo: user.isAdmin,
      nome: user.nome,
      email: user.email,
      ...token,
    };
  }
  private _createToken({ id, nome, email, isAdmin }: Usuario): any {
    const user: JwtPayload = { id, nome, email, isAdmin };
    const acessToken = this.jwtService.sign(user);
    return {
      expiresIn: process.env.EXPIRESIN,
      acessToken,
    };
  }
}
