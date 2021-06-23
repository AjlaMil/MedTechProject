const mongoose = require("mongoose")


 const Schema = new mongoose.Schema({
            name: String,
            email: String,
            password: String,
            address: String,
            role: String,
            vatnum: Number,
            cart:  {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'products',
              },
            purchased: Array
        })



module.exports = mongoose.model("users", Schema);

