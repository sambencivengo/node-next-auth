import Express, { Response } from 'express';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { user } from './db/schema';
import { db } from './db';




async function main() {


  const newUser: typeof user.$inferInsert = {
    username: 'John',
    age: 30,
    email: 'john@example.com',
  };

  await db.insert(user).values(newUser);
  console.log('New user created!')

  const users = await db.select().from(user);

  console.log('Getting all users from the database: ', users)

  await db
    .update(user)
    .set({
      age: 31,
    })
    .where(eq(user.email, user.email));
  console.log('User info updated!')

  await db.delete(user).where(eq(user.email, user.email));
  console.log('User deleted!')


  const app = Express();
  const port = 8000;

  app.get('/', (_req, res: Response) => {
    res.send('Hello World!');
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`http://localhost:${port}`);
  });

}

main();
