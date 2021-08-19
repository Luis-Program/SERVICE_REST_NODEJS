const express = require('express');
const router = express.Router();
const Products = require('../Models/Products');

router.delete('/:productid', async (req,res) => {

    try {
        const product = await Products.deleteOne({ _id: req.params.productid  });
        res.json(product);
    } catch (err) {
        res.json({ message : err });
    }

});


module.exports = router;