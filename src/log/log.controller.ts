import {
    Controller,
    Get,
    Post,
    Body,
    UseGuards,
  } from "@nestjs/common";
  import { LogService } from "./log.service"; 
  import { AuthGuard } from "@nestjs/passport";
  import { CreateLogDto} from "./dto/create-log.dto";
  import { ApiTags } from "@nestjs/swagger";


@ApiTags("Logs")
@Controller('log')
export class LogController {
    constructor(private readonly logService: LogService) {}


  @Post()
  @UseGuards(AuthGuard("jwt"))
  createLog(@Body() createLogDto: CreateLogDto) {
    return this.logService.createLog(createLogDto);
  }

  @Get()
  @UseGuards(AuthGuard("jwt"))
  getLog() {
    return this.logService.getLog();
  }
}
