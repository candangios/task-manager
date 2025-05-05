import { IsEnum, IsNotEmpty, IsOptional, ValidateIf } from 'class-validator';
import { TaskPriority, TaskStatus } from 'src/utils/contants';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsOptional()
  dueDate: string;

  @IsOptional()
  @ValidateIf((object, value) => value !== null)
  @IsEnum(TaskPriority)
  priority: TaskPriority | null;

  @IsOptional()
  @ValidateIf((object, value) => value !== null)
  @IsEnum(TaskStatus)
  status: TaskStatus | null;
}