"use strict"

const http = require("../utils/http")
const data = require("../data")

module.exports.handler = async (event) => {

    try{
        const { productId } = JSON.parse(event.body)
        console.log(productId)

        if(!productId) return http.unprocessableEntity()  

        const product = data.find(x => x.id === parseInt(productId))
        console.log(product)
        
        if(!product) return http.notFound("Product not found.")

        return http.ok(`${productId} added to cart.`)
    } 
    catch(error)
    {
        return http.error()
    }
    
} 