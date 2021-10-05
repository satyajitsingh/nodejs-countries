'use strict'
const apiUrl = `http://api.countrylayer.com/v2/region/Europe?access_key=f31a166e21032a314eb3af165363ee78`;
const fetch = require('node-fetch');

module.exports = {
    

    get:   async function () {

                  const response =   await fetch(apiUrl)
                
                 return(response.json())
                }
            }

        
