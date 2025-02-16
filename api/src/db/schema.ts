import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: integer().primaryKey().generatedByDefaultAsIdentity(),
  username: varchar({ length: 255 }).unique().notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});
