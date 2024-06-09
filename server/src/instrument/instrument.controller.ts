import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { AuthGuard } from 'src/auth/auth.guard';
import { GetSessionInfoDto } from 'src/auth/dto';
import { sessionInfo } from 'src/auth/session-info.decorator';

import { CreateInstrumentDto, InstrumentDto, SetInstrumentsDto } from './dto';
import { InstrumentService } from './instrument.service';

@Controller('instrument')
@UseGuards(AuthGuard)
export class InstrumentController {
  constructor(private instrumentService: InstrumentService) {}

  @Post()
  @ApiOkResponse({
    type: InstrumentDto,
  })
  createInstrument(@Body() data: CreateInstrumentDto): Promise<InstrumentDto> {
    return this.instrumentService.createInstrument(data);
  }

  @Get()
  @ApiOkResponse({
    type: [InstrumentDto],
  })
  getInstrumentList(): Promise<InstrumentDto[]> {
    return this.instrumentService.getInstrumentList();
  }

  @Post('user-instruments')
  @ApiOkResponse()
  setInstruments(@Body() data: SetInstrumentsDto, @sessionInfo() session: GetSessionInfoDto) {
    return this.instrumentService.setInstruments(session.id, data);
  }

  @Get('user-instruments')
  @ApiOkResponse({
    type: [InstrumentDto],
  })
  getInstruments(@sessionInfo() session: GetSessionInfoDto): Promise<InstrumentDto[]> {
    return this.instrumentService.getInstruments(session.id);
  }
}
