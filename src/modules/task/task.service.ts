import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './interfaces/task.interface';

@Injectable()
export class TaskService {
  constructor(@Inject('TASK_MODEL') private readonly taskModel: Model<Task>) { }

  async create(userId: string, taskData: CreateTaskDto): Promise<Task> {
    const task = new this.taskModel({ ...taskData, user: userId });
    return task.save();
  }

  async findByUser(userId: string) {
    return this.taskModel.find({ user: userId }).exec();
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async findOne(id: string): Promise<Task> {
    return this.taskModel.findById(id).exec();
  }

  async update(id: string, updateData: CreateTaskDto): Promise<Task> {
    return this.taskModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
  }

  async delete(id: string): Promise<Task> {
    return this.taskModel.findByIdAndDelete(id).exec();
  }
}
