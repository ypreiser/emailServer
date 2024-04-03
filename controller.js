// Controller.js

const { UserModel, ChatModel, MessageModel } = require('./models');

// UserController
async function createUser(data) {
    return await UserModel.create(data);
}

async function getUserById(id) {
    return await UserModel.findById(id);
}

async function updateUserById(id, data) {
    return await UserModel.findByIdAndUpdate(id, data, { new: true });
}

async function deleteUserById(id) {
    await UserModel.findByIdAndDelete(id);
}

// ChatController
async function createChat(data) {
    return await ChatModel.create(data);
}

async function getChatById(id) {
    return await ChatModel.findById(id);
}

async function updateChatById(id, data) {
    return await ChatModel.findByIdAndUpdate(id, data, { new: true });
}

async function deleteChatById(id) {
    await ChatModel.findByIdAndDelete(id);
}

// MessageController
async function createMessage(data) {
    return await MessageModel.create(data);
}

async function getMessageById(id) {
    return await MessageModel.findById(id);
}

async function updateMessageById(id, data) {
    return await MessageModel.findByIdAndUpdate(id, data, { new: true });
}

async function deleteMessageById(id) {
    await MessageModel.findByIdAndDelete(id);
}

module.exports = {
    createUser,
    getUserById,
    updateUserById,
    deleteUserById,
    createChat,
    getChatById,
    updateChatById,
    deleteChatById,
    createMessage,
    getMessageById,
    updateMessageById,
    deleteMessageById
};
