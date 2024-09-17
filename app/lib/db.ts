import * as schema from '@/db/schema';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const queryClient = postgres(process.env.DATABASE_URL as string);
const db = drizzle(queryClient, { schema, logger: true });

export default db;
export type DB = typeof db;
