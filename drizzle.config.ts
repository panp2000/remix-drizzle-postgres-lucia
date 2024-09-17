import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './app/db/schema/index.ts',
  out: './app/db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
  verbose: true,
  strict: true,
});
