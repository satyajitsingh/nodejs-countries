'use strict'
// Npm dependencies
const express = require('express')
//const flagpole = require('../../../common/middleware/flagpole')
// Local dependencies
const getController = require('./get.controller')
const postController = require('./post.controller')
// Initialisation
const router = new express.Router()
const indexPath = '/'
const paths = {
  index: indexPath
}
// Routing
router.get(paths.index,  getController)
router.post(paths.index, postController)

// Export
module.exports = {
  router,
  paths
}
