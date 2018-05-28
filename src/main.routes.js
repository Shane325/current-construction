'use strict'

/*
 * Module dependencies
 */
let express = require('express')
let router = express.Router()
let controller = require('./main.controller')
let service = require('./main.service')

// Define the application routes
router.get('/', controller.getHome)
router.get('/about', controller.getAbout)
router.get('/services', controller.getServices)
router.get('/estimate', controller.getEstimate)
router.get('/contact', controller.getContact)
router.post('/contact/send-email', controller.sendContactEmail)
router.get('/projects', controller.getProjects)
router.get('/project/:projectId', controller.getProject)

// Route middleware
router.param('projectId', service.getProjectById)

// Middleware to handle errors
router.use((err, req, res, next) => {
  res.render('../views/partials/error', {
    pageTitle: 'Error',
    message: err.message,
    error: err
  })
})

module.exports = router
