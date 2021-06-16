"use strict"

const http = require("../utils/http")
const data = require("../data")
//const { find } = require("../data")

module.exports.handler = async (event) => {

    try{
        const { id } = event.pathParameters
        console.log(id)

        if(!id) return http.unprocessableEntity()  

        const product = data.find(x => x.id === parseInt(id))
        console.log(product)
        
        if(!product) return http.notFound("Product not found.")

        return http.ok({products : product})
    }
    catch(error)
    {
        return http.error()
    }
    
} 