import { db } from "src/db";
import { users } from "src/db/schema";


export const createUser = async () => {
  try {
    console.log("Creating user")
    const newUser: typeof users.$inferInsert = {
      username: 'John',
      age: 30,
      email: 'john@example.com',
    };
    try {

    } catch (error) {

    }
    const val = await db.insert(users).values(newUser);

    console.log("User created!!!!!", { newUser })
    console.log(val)
    return { user: newUser };
  } catch (error: any) {
    return { error, message: "Unable to create new user" }
  }
}


