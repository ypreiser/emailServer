const express = require('express')
const router = express.Router();
let chatService = require('../services/chat.service')

router.get('/:flag', async (req, res) => {
    console.log(req.params.flag);
    try {
        let result = await chatService.getChats(req.body.user._id, req.params.flag)
        res.send(result)
    }
    catch (err) {
        res.status(400).send(err.message)
    }
})

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        let result = await chatService.createChat(req.body.user._id, req.body.subject, req.body.members = [])
        res.send(result).status(201)
    }
    catch (err) {
        res.status(400).send(err.message)
    }
})
router.delete('/:chatId', async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.params.chatId);
        let result = await chatService.deleteChat(req.body.user._id, req.params.chatId)
        res.send(result).status(200)
    }
    catch (err) {
        res.status(400).send(err.message)
    }
})

module.exports = router