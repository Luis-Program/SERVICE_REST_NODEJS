const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

    Name : {
        type: String,
        required: true},
    LastName : {
        type: String,
        required: true
    },
    Phone : {
        type: Number,
        required: true
    },
    Direction : {
        type: String,
        required: true
    }


});

module.exports = mongoose.model('Users', UserSchema);