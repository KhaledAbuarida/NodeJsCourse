const Product = require('../models/product');
const { purge } = require('../routes/admin');

exports.getProducts = (req, res, next)=> {
    Product.fetchAll(product => {
        res.render('shop/product-list', {
            prods: product,
            pageTitle: 'Shop', 
            path: '/products'
        })
    });   
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll(product => {
        res.render('shop/index', {
            prods: product, 
            pageTitle: 'Products', 
            path: '/'
        })
    });   
}

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        res.render('shop/product-detail', {pageTitle: product.title , product: product, path: '/products'})
    })
    // res.redirect('/'); 
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Your Cart', 
        path: '/cart'
    })
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Your orders', 
        path: '/orders'
    })
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'checkout',
    })
}