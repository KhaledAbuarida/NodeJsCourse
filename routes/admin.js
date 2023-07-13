const express = require('express');

const path = require('path')

const router = express.Router();

const product = [];

router.get('/add-product',(req, res, next) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'})
})

router.post('/add-product', (req, res, next) => {
    res.redirect('/');
    product.push({title: req.body.title })
}) 

exports.routes = router;
exports.product = product;
