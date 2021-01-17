const router = require('express').Router();
const faker = require('faker');



const Product = require('../models/product');

// routes
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/add-product', (req, res) => {
    res.render('products/add-product');
});
router.post('/add-product', (req, res) => {
    const product = new Product();

    product.category = req.body.category_name;
    product.name = req.body.product_name;
    product.price = req.body.product_price;
    product.cover = faker.image.image();

    product.save(err => {
        if (err) { return next(err) } else { res.redirect('/add-product') };
    });
});

router.get('/products/:page', (req, res, next) => {
    const perPage = 9;
    const page = req.params.page || 1;

    Product
        .find({})
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec((err, products) => {
            Product.countDocuments((err, count) => {
                if (err) return next(err);
                else res.render('products/products', {
                    products,
                    current: page,
                    pages: Math.ceil(count / perPage)
                });
            })
        })
});

router.get('/generate-fake-data', (req, res) => {
    for (let i = 0; i < 90; i++) {
        const product = new Product();

        product.category = faker.commerce.department();
        product.name = faker.commerce.productName();
        product.price = faker.commerce.price();
        product.cover = faker.image.image();

        product.save(err => { if (err) return next(err) });
    }
    res.redirect('/add-product');

});






module.exports = router;