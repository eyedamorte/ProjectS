import { Injectable } from '@nestjs/common';

import { DbService } from 'src/db/db.service';

import { CreateInstrumentDto, SetInstrumentsDto } from './dto';

@Injectable()
export class InstrumentService {
  constructor(private db: DbService) {}

  async createInstrument(data: CreateInstrumentDto) {
    return this.db.instrumentItem.create({
      data,
    });
  }

  async getInstrumentList() {
    return this.db.instrumentItem.findMany();
  }

  async getInstruments(userId: number) {
    return this.db.instrumentItem.findMany({
      where: {
        accounts: {
          some: {
            ownerId: {
              equals: userId,
            },
          },
        },
      },
    });
  }

  async setInstruments(userId: number, data: SetInstrumentsDto) {
    await this.db.account.update({
      where: {
        ownerId: userId,
      },
      data: {
        instrumentsList: {
          connect: data.instruments.map(i => ({ id: i })),
        },
      },
    });

    return this.getInstruments(userId);
  }
}
