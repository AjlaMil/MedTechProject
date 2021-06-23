"use strict"

const http = require("../utils/http")
const  Product  = require("../db/productSchema")
const { connect } = require("../db/connection")
const User  = require("../db/userSchema")

module.exports.handler = async (event) => {

    try{
        
        await connect();

        const { userId, item } = JSON.parse(event.body)

         const user = await User.findOne({ _id: userId});
         const product = await Product.findOne({ _id: item});
        // await User.findByIdAndUpdate(user.id, {
        //     $push: { cart: product._id },
        //   });

          await Product.findByIdAndUpdate(product.id, {
            $push: { createdBy: user._id },
          });

        // console.log("id: " + id)
        // if(!id) return http.unprocessableEntity()  

        // const product = data.find(x => x.id === parseInt(id))
        // console.log(product)
        // if(!product) return http.notFound("Product not found.")

        // const user = userdata.find(x => x.id === 1)
        
        // User.cart.push(product)
    


        //User.findByIdAndUpdate(user, { $set: { cart: 'jason bourne' }}, options, callback)

        return http.ok(`${item} added to cart.`)
    } 
    catch(error)
    {
        return JSON.stringify(error)
    }
    
}