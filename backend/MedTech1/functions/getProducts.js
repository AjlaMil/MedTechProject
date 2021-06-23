"use strict"

const http = require("../utils/http")

const { connect } = require("../db/connection")
const  Product  = require("../db/productSchema")

module.exports.handler = async (event) => {
    // const token = event.headers.Authorization
    // var actualToken = token.replace("Bearer ","")
    //  let secret;
    //  const config = require("config");
    //  secret = config.get("jwtSecret");
    //  const decoded = jwt.verify(actualToken, secret);
    //  console.log(decoded)
     
    await connect();

    const products = await Product.find();
    
    return http.ok({ products })
} 