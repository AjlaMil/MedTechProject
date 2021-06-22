"use strict"

const http = require("../utils/http")
const { connect } = require("../db/connection")
const  Product  = require("../db/productSchema")

module.exports.handler = async (event) => {

    const { id } = event.pathParameters;
    console.log(id)
    await connect();

    const product = await Product.findOne({ _id: id});
    console.log(product)
    await product.remove()

    return http.ok({ product })
} 