'use strict';

const http = require("../utils/http");


module.exports.handler = async (event) => {
  //console.log(event);
  
  try{
    const {firstName} = JSON.parse(event.body);
    return http.ok({}, `Hello, ${firstName}`);
  } catch(error){
    return http.error();
  }

};