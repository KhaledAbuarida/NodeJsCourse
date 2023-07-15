const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.render('admin/add-product', {pageTitle: 'Add Product', path: '/admin/add-product'}
)};

exports.postAddProduct =  (req, res, next) => {
    const prods = new Product(req.body.title);
    prods.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(product => {
        res.render('admin/products', {
            prods: product, 
            pageTitle: 'Admin Products', 
            path: '/admin/products'
        })
    });   
}