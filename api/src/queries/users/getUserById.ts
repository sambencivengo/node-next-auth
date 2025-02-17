
import { eq } from "drizzle-orm";
import { db } from "src/db";
import { users } from "src/db/schema";

export const getUserById = async (id: number) => {

  try {
    const user = await db.select().from(users).where(eq(users.id, id));
    return { data: user }
  } catch (error) {
    return { error, message: "Unable to get users" }
  }
};
