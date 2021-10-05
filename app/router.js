
'use strict'

//const index = require('./index')


// Registration dependencies
const register = require('./register/index')
const confirm = require('./confirm/index')

// Export
module.exports.bind = app => {
  app.use(register.router)
  app.use(confirm.router)
  //app.use(index.router)
}

