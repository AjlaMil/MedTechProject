"use strict"

const http = require("../utils/http")
const data = require("../data")
const Product  = require("../db/productSchema")

module.exports.handler = async (event) => {

    try{
        
        console.log(Product)

        const { name, vendor, brand, price, quantity, description, services, picture } = JSON.parse(event.body)
        
        console.log(name, vendor, brand, price, quantity, description, services, picture)

        const newProduct = new Product({

            name: name,
            vendor: vendor,
            brand: brand,
            price: price,
            quantity: quantity,
            description: description,
            services: services,
            picture: picture
        })

        await newProduct.save();

        return http.ok()
    }
    catch(error)
    {
        console.log(error)
        return http.error()
    }
    
} 