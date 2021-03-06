const mongoose = require("mongoose")

const Product = mongoose.model(
    "Product",
    new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        name: String,
        vendor: String,
        brand: String,
        price: Number,
        quantity: Number,
        description: String,
        services: Boolean,
        picture: String
    }),
    "products"
)

module.exports = {
    Product
}