import { ApiProperty } from '@nestjs/swagger';

export class InstrumentDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}

export class CreateInstrumentDto {
  @ApiProperty()
  name: string;
}

export class SetInstrumentsDto {
  @ApiProperty()
  instruments: number[];
}
