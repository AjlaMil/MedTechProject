"use strict"


const http = require("../utils/http")
const data = require("../data")
const User  = require("../db/userSchema")
const { connect } = require("../db/connection")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports.handler = async (event) => {

    try{
        
        await connect();
        const { email, password} = JSON.parse(event.body)
      
        const user = await User.findOne({ email: email});
        if (!user) {
            return http.invalidLogin()
          }
          const isMatch = await bcrypt.compare(password, user.password);

          if (!isMatch) {
            return http.invalidLogin()
          }

          const payload = {
            user: {
              id: user.id,
              role: user.role,
            },
          };
          let secret;
         secret = config.get('jwtSecret');

         const token = jwt.sign({ payload }, secret, {
            expiresIn: 360000 });

          return JSON.stringify({token, role:user.role})
    }
    catch(error)
    {
        console.log(error)
        return http.error()
    }
} 