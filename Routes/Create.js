const express = require('express');
const router = express.Router();
const Products = require('../Models/Products');



router.post('/', async (req,res) => {

    const product = new Products({
        Name : req.body.Name,
        Cost : req.body.Cost,
        Amount : req.body.Amount
    });

    try{
        const SavedProduct = await product.save();
        res.json(SavedProduct);
    }catch (err){
        res.json({ message : err });
    }

});



module.exports = router;