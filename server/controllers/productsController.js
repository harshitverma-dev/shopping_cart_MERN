const Product = require("../models/productsModel");

const AllProducts = async (req, res) => {
    try {
        const productData = await Product.find();
        if (productData) {
            return res.status(200).json({
                length: productData.length,
                productData
            });
        }
        res.status(404).json({
            message: "products are not avaliable"
        })
    } catch (err) {
        res.status(404).send(err);
    }
}

module.exports = { AllProducts }