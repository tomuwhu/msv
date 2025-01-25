import { mysqlTable, serial, text, int, varchar, datetime, date } from 'drizzle-orm/mysql-core';

export const user = mysqlTable('user', {
    id: varchar('id', { length: 255 }).primaryKey(),
    age: int('age'),
    username: varchar('username', { length: 32 }).notNull().unique(),
    passwordHash: varchar('password_hash', { length: 255 }).notNull()
});

export const session = mysqlTable("session", {
    id: varchar('id', { length: 255 }).primaryKey(),
    userId: varchar('user_id', { length: 255 }).notNull().references(() => user.id),
    expiresAt: datetime('expires_at').notNull()
});

export const todos = mysqlTable("todos", {
    userId: varchar('user_id', { length: 255 }).notNull().references(() => user.id),
    todo: text('todo').notNull(),
    date: datetime('date').notNull()
});