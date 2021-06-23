"use strict"

const http = require("../utils/http")
const  Product  = require("../db/productSchema")
const User  = require("../db/userSchema")

module.exports.handler = async (event) => {

    try{


        console.log(event.body)

        const { user, item } = JSON.parse(event.body)

        // console.log("id: " + id)
        // if(!id) return http.unprocessableEntity()  

        // const product = data.find(x => x.id === parseInt(id))
        // console.log(product)
        // if(!product) return http.notFound("Product not found.")

        // const user = userdata.find(x => x.id === 1)
        
        // User.cart.push(product)
    


        User.findByIdAndUpdate(user, { $set: { cart: 'jason bourne' }}, options, callback)

        return http.ok(`${id} added to cart.`)
    } 
    catch(error)
    {
        return http.error()
    }
    
}