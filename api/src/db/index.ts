import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { __prod__ } from '../constants';
import { users } from './schema';

export const db = drizzle(process.env.DATABASE_URL ?? "", {
  schema: {
    users: users,
  },
});
