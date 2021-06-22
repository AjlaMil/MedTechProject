"use strict"

const http = require("../utils/http")

const { connect } = require("../db/connection")
const  User  = require("../db/userSchema")

module.exports.handler = async (event) => {

    await connect();

    const users = await User.find();
    
    return http.ok({ users })
} 