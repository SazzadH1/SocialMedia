const Router = require ('@koa/router');
const router = new Router();

const socialmediaModel = require('../models/socialmedia-models.js');


router.get("/socialmedia", (ctx)=>{
    ctx.body = socialmediaModel.socialmedia;
})

module.exports = router;