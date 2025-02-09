import { db } from "src/db";
import { users } from "src/db/schema";


export interface CreateUserArgs {
  id?: number,
  username: string,
  age: number,
  email: string
}

export const createUser = async ({ id, age, username, email }: CreateUserArgs) => {
  try {
    const newUser: typeof users.$inferInsert = {
      id,
      username,
      age,
      email,
    };
    const result = await db.insert(users).values(newUser);

    return { data: result };
  } catch (error: any) {
    return { error, message: "Unable to create new user" }
  }
}


