const express = require('express');
const router = express.Router()
const { AllProducts } = require("../controllers/productsController");


router.get('/products', AllProducts);


module.exports = router;