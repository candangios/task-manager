import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskProviders } from './task.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TaskController],
  providers: [
    TaskService,
    ...TaskProviders]
})
export class TaskModule { }
