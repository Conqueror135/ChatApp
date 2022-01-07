const chats = require('./index').db('myFristDatabase').collection('Chats');
const ObjectId= require('mongodb').ObjectId;
const save = async ({sender, message, timestamp})=>{
    await chats.insertOne({sender, message, timestamp});
    return;
}
const getAll = async()=>{
    return await chats.find().toArray();
}
const getById = async id =>{
    return await chats.findOne({_id:ObjectId(id)});
}
const update = async (id, {sender, message, timestamp})=>{
    await chats.replaceOne({_id:ObjectId(id)},{sender, message, timestamp});
    return ;
}
const removeById = async id =>{
    await chats.deleteOne({_id:ObjectId(id)})
}
module.exports={save, getAll, getById, removeById, update};
