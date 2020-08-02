# serverless-koa-template
Serverless Typescript Template for Koa.js ( or Express.js )

## Install
```sh
npx degit cjaewon/serverless-koa-template sls-example
```

## Scripts ( yarn )
> Dev
```sh
yarn start
> sls offline
```

> Deploy
```sh
yarn deploy
> sls deploy
```

## Migration Koa.js to Express
```ts
// app.ts
import express from 'express';

const app = express();

app.get('/hello-world', (req, res) => {
  res.send('Hello World');
});

export default app;
```
