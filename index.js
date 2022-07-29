const Koa= require ('koa');
const app = new Koa();

const router = require('./lib/routes/socialmedia-router');

app.use(router.routes());

app.listen (3001, () => {
console.log('Server running at http://localhost:3001');
});