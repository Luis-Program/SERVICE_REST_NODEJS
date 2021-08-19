const express = require('express');
const router = express.Router();
const Products = require('../Models/Products');


router.put('/:productId', async (req,res) => {

    try{
    const products = await Products.updateOne({_id: req.params.productId}
    ,{ $set: {
        Name : req.body.Name,
        Cost : req.body.Cost,
        Amount : req.body.Amount
    } })
    res.json(products);
    }catch(err){
        res.json({ message : err });
    }
});


module.exports = router;