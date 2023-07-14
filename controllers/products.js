const product = [];

exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'}
)};

exports.postAddProduct =  (req, res, next) => {
    res.redirect('/');
    product.push({title: req.body.title }
)};

exports.addProduct = (req, res, next)=> {
    // console.log(adminData.product);
    // const product = adminData.product;
    res.render('shop', {prods: product, pageTitle: 'Shop' , path: '/'})
}