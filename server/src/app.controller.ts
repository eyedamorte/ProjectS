import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';
import { PrismaClient } from '@prisma/client';

import { AppService } from './app.service';
import { DbService } from './db/db.service';

const prisma = new PrismaClient();

@Controller()
export class AppController {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly appService: AppService,
    private dbService: DbService,
    // eslint-disable-next-line no-empty-function
  ) {}

  @Get()
  async getHello(): Promise<string> {
    const users = await this.dbService.user.findMany();
    console.log(users);

    return this.appService.getHello();
  }
}
