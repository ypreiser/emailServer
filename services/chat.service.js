const userController = require('../DL/controllers/user.controller')
const chatController = require('../DL/controllers/chat.controller')
const { Flags } = require('../utility')

let funcs = {
    inbox: [Flags.Inbox],
    notread: [Flags.NotRead],
    send: [Flags.Sent],
    favorite: [Flags.Favorite],
    deleted: [Flags.Deleted],
    draft: [Flags.Draft],
}

async function getChats(userId, flag) {
    if (!funcs[flag]) throw ""
    let { chats } = await userController.readByFlags(userId, funcs[flag], { chats: true, users: true });
    return chats
}
async function updateReadChat(userId, chatId) {
    let user = await userController.readOne(userId);
    user.chats.find(c => c._id == chatId).isRead = true
    userController.save(user)
    // let chatIndex = chats.findIndex(c => c._id == chatId)
    // userController.update({ _id: userId }, { $set: { [`chats.${chatIndex}.isRead`]: true } })

}

async function createChat(userId, subject, members) {
    members = [...members, userId]
    if (!subject) throw 'missing subject'

    let newChat = chatController.create({
        subject,
        members
    })

    // Push chat to members
    members.forEach(async member => {
        let user = await userController.getById(member)
        user.chats.push(newChat._id)
        await userController.update(member, user.chats)
    })

    return newChat
}
async function deleteChat(userId, chatId) {
    let chat = await chatController.getById(chatId);
    if (!chat) throw 'chat not found';

    await userController.del(userId, chatId);

    return chat;
}

module.exports = { getChats, updateReadChat, createChat, deleteChat }