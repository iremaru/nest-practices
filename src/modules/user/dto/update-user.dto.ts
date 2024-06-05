import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateUserDTO {
  @IsUUID()
  readonly userID: string;

  @IsString()
  @IsOptional()
  readonly userName: string;
}
