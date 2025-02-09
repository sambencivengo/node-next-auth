import Express, { Response } from 'express';
import 'dotenv/config';
import Express, { Response } from 'express';
import { createUser, CreateUserArgs } from './queries/users/createUser';
import { router as trpcRouter } from './trpc';

const appRouter = trpcRouter({
  // ...
});

export type AppRouter = typeof appRouter;

async function main() {

  const app = Express();
  const port = 8000;

  app.use(Express.json());

  app.get('/', (_req, res: Response) => {
    res.send('Hello World!');
  });

  app.post('/users/new', async (req, res: Response) => {
    console.log(req.body)

    const { username, email, age }: CreateUserArgs = req.body;

    const result = await createUser({ age, email, username });
    res.send(result)
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`http://localhost:${port}`);
  });

}

main();
