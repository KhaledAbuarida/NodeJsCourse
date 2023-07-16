const Product = require('../models/product');

exports.getProduct = (req, res, next)=> {
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