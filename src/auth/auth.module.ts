import { RolesGuard } from "./guards/roles.guard";
import { UsuarioModule } from "./../usuario/usuario.module";
import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./models/jwt.strategy";
import { UsuarioService } from "src/usuario/usuario.service";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  imports: [
    UsuarioModule,
    PassportModule.register({
      defaultStrategy: "jwt",
      property: "user",
      session: false,
    }),
    JwtModule.register({
      secret: process.env.SECRETKEY,
      signOptions: {
        expiresIn: process.env.EXPIRESIN,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
    UsuarioService,
    PrismaService,
    RolesGuard,
  ],
  exports: [PassportModule, JwtModule],
})
export class AuthModule {}
