const express = require('express');
const router = express.Router();
const Products = require('../Models/Products');



router.get('/', async (req,res) => {

    try{

        const products = await Products.find();
        res.json(products);

    }catch (err){

        res.json({ message : err});

    }

});

router.get('/:productId', async (req,res) => {

    try{
    const products = await Products.findById(req.params.productId);
    res.json(products);
    }catch(err){
        res.json({ message : err });
    }
});


module.exports = router;