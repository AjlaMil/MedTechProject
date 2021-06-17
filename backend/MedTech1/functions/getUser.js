"use strict"

const http = require("../utils/http")
const data = require("../usersdata")

module.exports.handler = async (event) => {

    try{
        const { id } = event.pathParameters
        console.log(id)

        if(!id) return http.unprocessableEntity()  

        const user = data.find(x => x.id === parseInt(id))
        console.log(user)
        
        if(!user) return http.notFound("User not found.")

        return http.ok({users : user})
    }
    catch(error)
    {
        return http.error()
    }
    
} 