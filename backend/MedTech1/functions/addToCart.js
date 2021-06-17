"use strict"

const http = require("../utils/http")
const data = require("../data")

module.exports.handler = async (event) => {

    try{
        const { id } = JSON.parse(event.body)
        console.log(id)

        if(!id) return http.unprocessableEntity()  

        const product = data.find(x => x.id === parseInt(id))
        console.log(product)
        
        if(!product) return http.notFound("Product not found.")

        return http.ok(`${id} added to cart.`)
    } 
    catch(error)
    {
        return http.error()
    }
    
}