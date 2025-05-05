import { Document } from 'mongoose';
import { TaskPriority, TaskStatus } from 'src/utils/contants';


export interface Task extends Document {
  readonly title: string;
  readonly description: string;
  readonly dueDate: Date;
  readonly status: TaskStatus;
  readonly completed: Boolean;
  readonly priority: TaskPriority;
  readonly user: string;
}
