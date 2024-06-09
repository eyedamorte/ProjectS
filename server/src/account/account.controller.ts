import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { AuthGuard } from 'src/auth/auth.guard';
import { GetSessionInfoDto } from 'src/auth/dto';
import { sessionInfo } from 'src/auth/session-info.decorator';

import { AccountService } from './account.service';
import { AccountDto, PatchAccountDto } from './dto';

@Controller('account')
@UseGuards(AuthGuard)
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Get()
  @ApiOkResponse()
  getAccount(@sessionInfo() session: GetSessionInfoDto): Promise<AccountDto> {
    return this.accountService.getAccount(session.id);
  }

  @Patch()
  @ApiOkResponse({
    type: AccountDto,
  })
  patchAccount(
    @Body() body: PatchAccountDto,
    @sessionInfo() session: GetSessionInfoDto,
  ): Promise<AccountDto> {
    return this.accountService.patchAccount(session.id, body);
  }
}
