import { Module } from '@nestjs/common';

import { DbModule } from 'src/db/db.module';

import { InstrumentController } from './instrument.controller';
import { InstrumentService } from './instrument.service';

@Module({
  imports: [DbModule],
  providers: [InstrumentService],
  controllers: [InstrumentController],
})
export class InstrumentModule {}
