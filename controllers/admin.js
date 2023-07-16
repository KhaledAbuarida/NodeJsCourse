const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.render('admin/add-product', {pageTitle: 'Add Product', path: '/admin/add-product'}
)};

exports.postAddProduct =  (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const prods = new Product(title, imageUrl, price, description);
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