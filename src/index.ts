import Express, { Response } from 'express';
import 'dotenv/config';
import { eq } from 'drizzle-orm';
import { users } from './db/schema';
import { db } from './db';
import { deleteUser } from './queries/users/deleteUser';
import { createUser } from './queries/users/createUser';




async function main() {

  // const newUser: typeof user.$inferInsert = {
  //   username: 'John',
  //   age: 30,
  //   email: 'john@example.com',
  // };

  // await db.insert(user).values(newUser);
  // console.log('New user created!')

  // const users = await db.select().from(user);

  // console.log('Getting all users from the database: ', users)

  // await db
  //   .update(user)
  //   .set({
  //     age: 31,
  //   })
  //   .where(eq(user.email, user.email));
  // console.log('User info updated!')

  // await db.delete(user).where(eq(user.email, user.email));
  // console.log('User deleted!')


  const app = Express();
  const port = 8000;

  app.get('/', (_req, res: Response) => {
    res.send('Hello World!');
  });
  app.get('/users/delete', async (_req, res: Response) => {
    const val = deleteUser();
    res.send(val)
  });

  app.get('/users/new', async (_req, res: Response) => {
    const val = createUser();
    res.send(val)
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`http://localhost:${port}`);
  });

}

main();
