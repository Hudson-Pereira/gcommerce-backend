import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateRoleDto {
  @IsBoolean()
  @IsNotEmpty()
  role: boolean;
}
