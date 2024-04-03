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
        inbox: Boolean,
        outgoing: Boolean,
        favorite: Boolean,
        draft: Boolean,
        deleted: Boolean,
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
const User = mongoose.model('User', userSchema);
const Chat = mongoose.model('Chat', chatSchema);
const Message = mongoose.model('Message', messageSchema);

module.exports = {
    User,
    Chat,
    Message,
    
};
