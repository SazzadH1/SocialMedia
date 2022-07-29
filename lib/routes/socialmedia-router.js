const Router = require ('@koa/router');
const router = new Router();

const socialmediaModels = require('../models/socialmedia-models');


router.get("/socialmedia", (ctx)=>{
    ctx.body = socialmediaModels.socialmedia;
});

router.get('/socialmedia/:id', (ctx)=>{
    const index=ctx.request.params.id;
    ctx.body=socialmediaModels.socialmedia[index];
});

router.delete('/socialmedia/:id', (ctx)=> {
    const index=ctx.request.params.id;
    socialmediaModels.socialmedia.splice(index,1)
    ctx.status=204;
});

router.post ('/socialmedia', (ctx)=>{
    const text=ctx.request.query.text;
    socialmediaModels.socialmedia.push({text});
    
    ctx.status=201;
});

module.exports = router;