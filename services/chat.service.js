const userController = require('../DL/controllers/user.controller')
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
    user.chats.find(c => c._id == chatId).isRead=true
    userController.save(user)
    // let chatIndex = chats.findIndex(c => c._id == chatId)
    // userController.update({ _id: userId }, { $set: { [`chats.${chatIndex}.isRead`]: true } })

}

module.exports = { getChats,updateReadChat }