import 'dotenv/config';
import express from 'express';

const app = express();

app.listen(({port}), () => {
  console.log(`Server listening on http://localhost:${port}`);
});
