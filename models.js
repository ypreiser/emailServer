// models.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define User schema
const userSchema = new Schema({
    name: String,
    email: String,
    image: String,
    chats: [{
        chatId: {
            type: Schema.Types.ObjectId,
            ref: 'Chat'
        },
        isRead: {
            default: false,
            type: Boolean,
        },
        inbox: {
            default: false,
            type: Boolean,
        },
        outgoing: {
            default: false,
            type: Boolean,
        },
        favorite: {
            default: false,
            type: Boolean,
        },
        draft: {
            default: false,
            type: Boolean,
        },
        deleted: {
            default: false,
            type: Boolean,
        },
        tags: [String]
    }]
});

// Define Chat schema
const chatSchema = new Schema({
    participants: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }],
    subject: {
        type: String,
        required: true
    }

});

// Define Message schema
const messageSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        required: true
    },
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    lastDate: {
        type: Date
    }
});


// Create models
const UserModel = mongoose.model('Users', userSchema);
const ChatModel = mongoose.model('Chats', chatSchema);
const MessageModel = mongoose.model('Messages', messageSchema);

module.exports = {
    UserModel,
    ChatModel,
    MessageModel,  
};
