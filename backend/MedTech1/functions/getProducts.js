"use strict"

const http = require("../utils/http")
const data = require("../data")

module.exports.handler = async (event) => {

 
    return http.ok({ products: data })
} 