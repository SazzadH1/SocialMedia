const Router = require ('@koa/router');
const router = new Router();

const socialmediaModels = require('../models/socialmedia-models');

function getAll(ctx) {
  ctx.body = socialmediaModels.socialmedia;
}

function getSomething (ctx) {
    const index=ctx.request.params.id;
    ctx.body=socialmediaModels.socialmedia[index];
}

function deleteWord (ctx){
const index=ctx.request.params.id;
socialmediaModels.socialmedia.splice(index,1)
ctx.status=204;
}

function post (ctx){
    const text=ctx.request.body.text;
    socialmediaModels.socialmedia.push({text});
    ctx.status=201;
}


modules.export={ getAll,getSomething, deleteWord, post}