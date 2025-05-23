import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { TaskModule } from './modules/task/task.module';

@Module({
  imports: [AuthModule, UserModule, TaskModule],
  // controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
