"use strict"


const bcrypt = require('bcryptjs');
const http = require("../utils/http")
const { connect } = require("../db/connection")
const User  = require("../db/userSchema")

module.exports.handler = async (event) => {

    try{
        
        await connect();
        const { name, email, password, address, role, vatnum} = JSON.parse(event.body)
        let checkUser = await User.findOne({ email });

        if (checkUser) {
          return http.errorLogin()
        }
          //new instance of user
        const user = new User({
            name,
            email,
            password,
            address,
            role,
            vatnum
          });
    
          //encrypt password
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(password, salt);
          await user.save();
  return http.ok()
       
    }
    catch(error)
    {
        console.log(error)
        return http.error()
    }
} 