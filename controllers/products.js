const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'}
)};

exports.postAddProduct =  (req, res, next) => {
    const prods = new Product(req.body.title);
    prods.save();
    res.redirect('/');
};

exports.getProduct = (req, res, next)=> {
    const product = Product.fetchAll(product => {
        res.render('shop', {prods: product, pageTitle: 'Shop' , path: '/'})
    });   
}