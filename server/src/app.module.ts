import { Module } from '@nestjs/common';

import { AccountModule } from './account/account.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CookieService } from './auth/cookie.service';
import { PasswordService } from './auth/password.service';
import { DbModule } from './db/db.module';
import { InstrumentModule } from './instrument/instrument.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DbModule, AuthModule, UsersModule, AccountModule, InstrumentModule],
  controllers: [AppController],
  providers: [AppService, PasswordService, CookieService],
})
export class AppModule {}
