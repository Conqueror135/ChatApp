const {save, getAll, getById, removeById, update} = require('../db/chats.dao');
const createNewChat = async ({sender, message, timestamp})=>{
    const chat = {
        sender,
        message,
        timestamp
    };
    return await save(chat);
}
const getChats = async ()=>{
    return await getAll();
}
const getChat = async id =>{
    return await getById(id);
}
const deleteChat = async id =>{
    return await removeById(id);
}
const updateChat = async (id, {sender, message, timestamp})=>{
    return await update(id, {sender, message, timestamp});
}
module.exports = {createNewChat, getChat, getChats, updateChat, deleteChat};