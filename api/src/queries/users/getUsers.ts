import { db } from "src/db";
import { users } from "src/db/schema";

export const getUsers = async () => {

  try {
    const allUsers = await db.select().from(users);
    return { data: allUsers }
  } catch (error) {
    return { error, message: "Unable to get users" }
  }
};
