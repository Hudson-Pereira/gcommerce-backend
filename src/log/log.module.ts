import { Module } from '@nestjs/common';
import { LogController } from './log.controller';
import { LogService } from './log.service';
import { PrismaModule } from "src/prisma/prisma.module";
import { JwtStrategy } from "src/auth/models/jwt.strategy";

@Module({
  controllers: [LogController],
  providers: [LogService],
  imports: [PrismaModule, JwtStrategy],
})
export class LogModule {}
