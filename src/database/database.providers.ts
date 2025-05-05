import * as mongoose from 'mongoose';
import { env } from 'src/config';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(env.MONGODB_URI),
  },
];