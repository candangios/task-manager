import { Mongoose } from 'mongoose';
import { TaskSchema } from './schemas/task.schema';

export const TaskProviders = [
  {
    provide: 'TASK_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Task', TaskSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];