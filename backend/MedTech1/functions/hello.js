 'use strict';

const http = require("../utils/http");


module.exports.handler = async (event) => {
  //console.log(event);
  
  try{
    return http.ok();
  } catch(error){
    return http.error();
  }
  
};
