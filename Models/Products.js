const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    id : {
        type: Number, 
    },
    name : {
        type: String,
        required: true},
    cost : {
        type: Number,
        required: true
    },
    amount : {
        type: Number,
        required: true
    }

});


module.exports = mongoose.model('Products', ProductSchema);