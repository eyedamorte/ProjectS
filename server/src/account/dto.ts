import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AccountDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  ownerId: number;
}

export class PatchAccountDto {
  @ApiProperty()
  @IsOptional()
  instrumentsList: number[];
}
