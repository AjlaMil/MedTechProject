"use strict"

const http = require("../utils/http")
const { connect } = require("../db/connection")
const  User  = require("../db/userSchema")

module.exports.handler = async (event) => {

    const { id } = event.pathParameters;
    console.log(id)
    await connect();

    const user = await User.findOne({ _id: id});
    console.log(user)


    return http.ok({ user })
} 