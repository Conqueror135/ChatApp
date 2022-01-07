const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const chatRoutes = require('./routes/v1/chats.routes');
const app = new Koa();
app.use(bodyParser());
app.use(chatRoutes.routes()).use(chatRoutes.allowedMethods());
app.listen(4000);
console.log("App is running!");