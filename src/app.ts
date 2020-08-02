import Koa from 'koa';
import Router from '@koa/router';

const app = new Koa();
const router = new Router();

router.get('/hello-world', ctx => {
  ctx.body = 'Hello World';
});

app.use(router.routes()).use(router.allowedMethods());


export default app;

