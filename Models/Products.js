const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({

    Name : {
        type: String,
        required: true},
    Cost : {
        type: Number,
        required: true
    },
    Amount : {
        type: Number,
        required: true
    }

});


module.exports = mongoose.model('Products', ProductSchema);