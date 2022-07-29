const Koa= require ('koa');
const app = new Koa();

// const mainRouter = require('./lib/routes/socialmedia-routes');

// app.use(router.routes());

app.listen (3000, () => {
console.log('Server running at http://localhost:3000');
});