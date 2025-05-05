import { Body, Request, Controller, Delete, Get, Post, Put, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }
  @Post()
  create(@Request() req, @Body() taskData: CreateTaskDto) {
    return this.taskService.create(req.user.userId, taskData);
  }
  @Get()
  findAll(@Request() req,) {
    return this.taskService.findByUser(req.user.userId);
  }

  @Get(':id')
  async findOne(@Request() req, @Param('id') id: string) {
    try {
      const resultTask = await this.taskService.findOne(id);
      if (resultTask.user === req.user.userId) {
        return resultTask
      }
      throw new Error("Not authorized!")
    } catch (error) {
      return error
    }

  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: any) {
    return this.taskService.update(id, updateData);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
