const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    fastDelivery: Boolean,
    name: String,
    price: String,
    inStock: Number,
    category: String,
    image: String,
    ratings: Number
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;