const express = require('express');
const router = express.Router();
const Products = require('../Models/Products');



router.post('/', async (req,res) => {

    const product = new Products({
        name : req.body.name,
        cost : req.body.cost,
        amount : req.body.amount
    });

    try{
        const SavedProduct = await product.save();
        res.json(SavedProduct);
    }catch (err){
        res.json({ message : err });
    }

});



module.exports = router;