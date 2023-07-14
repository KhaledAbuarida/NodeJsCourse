const express = require('express');

const path = require('path');

const adminData = require('./admin');

const productController = require('../controllers/products');

const router = express.Router();


router.get('/', productController.addProduct)

module.exports = router;