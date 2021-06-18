"use strict"

const http = require("../utils/http")

const { connect } = require("../db/connection")
const  Product  = require("../db/productSchema")

module.exports.handler = async (event) => {

    await connect();

    const products = await Product.find();
    
    return http.ok({ products })
} 