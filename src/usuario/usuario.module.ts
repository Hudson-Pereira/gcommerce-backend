import { Module } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { UsuarioController } from "./usuario.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { JwtStrategy } from "src/auth/models/jwt.strategy";

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
  imports: [PrismaModule, JwtStrategy],
})
export class UsuarioModule {}
