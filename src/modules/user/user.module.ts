import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { DatabaseModule } from 'src/database/database.module';
import { UserProviders } from './user.providers';

@Module({
  imports: [
    DatabaseModule
  ],
  providers: [
    UserService,
    ...UserProviders
  ],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule { }
