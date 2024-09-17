import { user } from '@/db/schema/user';
import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

export const session = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expires_at', {
    withTimezone: true,
    mode: 'date',
  }).notNull(),
  userId: integer('user_id')
    .notNull()
    .references(() => user.id),
});

export const sessionSchema = createInsertSchema(session);
export type SessionSchema = z.infer<typeof sessionSchema>;
