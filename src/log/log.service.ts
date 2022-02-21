import {Injectable } from "@nestjs/common";
import { Log } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateLogDto} from "./dto/create-log.dto";

@Injectable()
export class LogService {
    constructor(private prisma: PrismaService) {}

    async createLog(createLogDto: CreateLogDto): Promise<Log> {
        return await this.prisma.log.create({
          data: { ...createLogDto },
        });
      }
    
    async getLog(): Promise<Log[]> {
        return await this.prisma.log.findMany();
      }
    
}
