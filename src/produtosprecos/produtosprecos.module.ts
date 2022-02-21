import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module'
import { ProdutosprecosService } from './produtosprecos.service';
import { ProdutosprecosController } from './produtosprecos.controller';
import { JwtStrategy } from 'src/auth/models/jwt.strategy';
import { MulterModule } from '@nestjs/platform-express'

@Module({
  imports: [PrismaModule,
  MulterModule.register({dest: "src/produto/uploads"})],
  controllers: [ProdutosprecosController],
  providers: [ProdutosprecosService, JwtStrategy]
})
export class ProdutosprecosModule {}
