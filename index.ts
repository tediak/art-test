import routes from './src/routes';
import express from 'express';

const PORT = process.env.PORT || 9000;

const app = express();

for (const { path, router } of routes) {
  app.use(path, router);
}

app.listen(PORT, () => {
  console.log('Server listening on http://localhost:' + PORT)
})