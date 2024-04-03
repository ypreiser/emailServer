const { User, Chat, Message, Mailbox } = require('./models');

// UserController
const UserController = {
    createUser: async (req, res) => {
        try {
            const user = new User(req.body);
            await user.save();
            res.status(201).json(user);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    getUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    updateUser: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json({ message: 'User deleted' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};

// ChatController
const ChatController = {
    createChat: async (req, res) => {
        try {
            const chat = new Chat(req.body);
            await chat.save();
            res.status(201).json(chat);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    getChat: async (req, res) => {
        try {
            const chat = await Chat.findById(req.params.id);
            if (!chat) {
                return res.status(404).json({ message: 'Chat not found' });
            }
            res.json(chat);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    updateChat: async (req, res) => {
        try {
            const chat = await Chat.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!chat) {
                return res.status(404).json({ message: 'Chat not found' });
            }
            res.json(chat);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    deleteChat: async (req, res) => {
        try {
            const chat = await Chat.findByIdAndDelete(req.params.id);
            if (!chat) {
                return res.status(404).json({ message: 'Chat not found' });
            }
            res.json({ message: 'Chat deleted' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};

// MessageController
const MessageController = {
    createMessage: async (req, res) => {
        try {
            const message = new Message(req.body);
            await message.save();
            res.status(201).json(message);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    getMessage: async (req, res) => {
        try {
            const message = await Message.findById(req.params.id);
            if (!message) {
                return res.status(404).json({ message: 'Message not found' });
            }
            res.json(message);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    updateMessage: async (req, res) => {
        try {
            const message = await Message.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!message) {
                return res.status(404).json({ message: 'Message not found' });
            }
            res.json(message);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    deleteMessage: async (req, res) => {
        try {
            const message = await Message.findByIdAndDelete(req.params.id);
            if (!message) {
                return res.status(404).json({ message: 'Message not found' });
            }
            res.json({ message: 'Message deleted' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};

module.exports = {
    UserController,
    ChatController,
    MessageController
};
