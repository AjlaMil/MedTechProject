const mongoose = require("mongoose")

// const Product = mongoose.model(
//     "Product",
//     new mongoose.Schema({
//         _id: mongoose.Schema.Types.ObjectId,
//         name: String,
//         vendor: String,
//         brand: String,
//         price: Number,
//         quantity: Number,
//         description: String,
//         services: Boolean,
//         picture: String
//     }),
//     "products"
// )

 const Schema = new mongoose.Schema({
            name: String,
            vendor: String,
            brand: String,
            price: Number,
            quantity: Number,
            description: String,
            services: Boolean,
            picture: String,
            createdBy:  {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users',
              },
        })


// module.exports = {
//     Product
// }


module.exports = mongoose.model("products", Schema);
