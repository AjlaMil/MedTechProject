"use strict"

const http = require("../utils/http")
const data = require("../data")
const User  = require("../db/userSchema")
const { connect } = require("../db/connection")

module.exports.handler = async (event) => {

    try{
        
        await connect();

        console.log(User)

        const { name, email, password, address, vatnum, cart, purchased } = JSON.parse(event.body)
        
        console.log(name, email, password, address, vatnum, cart, purchased)

        const newUser = new User({

            name: name,
            email: email,
            password: password,
            address: address,
            vatnum: vatnum,
            cart: cart,
            purchased: purchased
        })

        await newUser.save();

        return http.ok()
    }
    catch(error)
    {
        console.log(error)
        return http.error()
    }
    
} 