import { db } from "../../db";
import { user } from "../../db/schema";

export const createUser = async ({ }) => {
	try {
		const newUser: typeof user.$inferInsert = {
			username: 'John',
			age: 30,
			email: 'john@example.com',
		};
		await db.insert(user).values(newUser);
	} catch (error: any) {
		return { error, message: "Unable to create new user" }
	}
};



