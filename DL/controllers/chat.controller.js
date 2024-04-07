const chatModel = require('../models/chat.model')

// CRUD
async function create(data) {
    return await chatModel.create(data)
}
async function read(filter,isPopulate) {
    return await chatModel.find(filter).populate(isPopulate ? 'msg' :'')
}
async function readOne(filter) {
    return await chatModel.findOne(filter)
}
async function update(id, data) {
    // return await chatModel.findOneAndUpdate({_id:id}, data,{new : true})
    return await chatModel.findByIdAndUpdate(id, data, { new: true })
}
async function del(id) {
    return await update(id, { isActive: false })
}

module.exports = { create, read, readOne, update, del }