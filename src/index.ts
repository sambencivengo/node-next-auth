import Express, { Response } from 'express';
import 'dotenv/config';
import { createUser } from './queries/users/createUser';
import { router as trpcRouter } from './trpc';

const appRouter = trpcRouter({
  // ...
});

export type AppRouter = typeof appRouter;
async function main() {

  const app = Express();
  const port = 8000;

  app.get('/', (_req, res: Response) => {
    res.send('Hello World!');
  });

  app.get('/users/new', async (_req, res: Response) => {
    const result = await createUser();
    res.send(result)
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`http://localhost:${port}`);
  });

}

main();
