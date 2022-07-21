const express = require('express');
const router= express.Router();
const getAllProducts=require('../controllers/products')
router.route('/').get(getAllProducts)
router.route('/static').get(getAllProducts);
module.exports= router