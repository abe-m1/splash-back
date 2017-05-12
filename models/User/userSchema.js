const mongoose = require('mongoose')
var Schema = mongoose.Schema;

const User = {
    firstName: {type: String},
    lastName: {type: String},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    website: [{type: Schema.Types.ObjectId, ref: 'Website'}],
}

module.exports = User
