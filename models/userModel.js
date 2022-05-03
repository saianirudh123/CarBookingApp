const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: 'string',required:'true'},
    password: {type: 'string',required:'true'}
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel;