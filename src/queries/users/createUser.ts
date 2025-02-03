import { DefaultViewBuilderCore } from "drizzle-orm/pg-core";
import { user } from "../../db/schema";

const newUser: typeof user.$inferInsert = {
	username: 'John',
	age: 30,
	email: 'john@example.com',
};

await db.insert(user).values(newUser);
console.log('New user created!')

const users = await DefaultViewBuilderCore.select().from(user);

console.log('Getting all users from the database: ', users)
await db
	.update(user)
	.set({
		age: 31,
	})
	.where(eq(user.email, user.email));
console.log('User info updated!')

