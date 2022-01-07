const Router = require('koa-router');
const {createNewChat, getChat, getChats, updateChat, deleteChat} = require('../../api/chats.api');
const router = new Router({
    prefix:'/v1/chats'
});
router.get('/', async ctx => {
    ctx.body = await getChats();
});
router.get('/:id', async ctx =>{
    const id = ctx.params.id;
    ctx.body = await getChat(id);
});
router.post('/', async ctx => {
    let chat = ctx.request.body;
    ctx.body = chat;
    await createNewChat(chat);
    ctx.response.status = 200;
});
router.put('/:id', async ctx => {
    const id = ctx.params.id;
    let chat = ctx.request.body;
    await updateChat(id, chat);
    ctx.body = chat;
    ctx.response.status = 200;
});
router.delete('/:id', async ctx => {
    const id = ctx.params.id;
    await deleteChat(id);
    ctx.body = "Ok";
});
module.exports = router;
