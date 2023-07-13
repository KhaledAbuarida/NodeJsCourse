const express = require('express');

const path = require('path');

const adminData = require('./admin');

const router = express.Router();


router.get('/',(req, res, next)=> {
    console.log(adminData.product);
    const product = adminData.product;
    res.render('shop', {prods: product, pageTitle: 'Shop' , path: '/'})
})

module.exports = router;