"use strict"

const http = require("../utils/http")
const data = require("../data")
const userdata = require("../usersdata")
const usersdata = require("../usersdata")

module.exports.handler = async (event) => {

    try{
        console.log(event.body)

        const { id } = JSON.parse(event.body)
        console.log("id: " + id)
        if(!id) return http.unprocessableEntity()  

        const product = data.find(x => x.id === parseInt(id))
        console.log(product)
        if(!product) return http.notFound("Product not found.")

        const user = userdata.find(x => x.id === 1)
        
        usersdata.cart.push(product)
       

        

        return http.ok(`${id} added to cart.`)
    } 
    catch(error)
    {
        return http.error()
    }
    
}