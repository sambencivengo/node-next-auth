import Express, { Response } from 'express';
import 'dotenv/config';

const app = Express();
const port = 3000;


app.get('/', (_req, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`http://localhost:${port}`);
});
