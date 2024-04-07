const express = require('express'),
    router = express.Router();
let chatService = require('../services/chat.service')

router.get('/:flag', async (req, res) => {
    try {
        let result = await chatService.getChats(req.body.user._id, req.params.flag)
        res.send(result)
    }
    catch (err) {
        res.status(400).send(err.message)
    }
})

module.exports = router