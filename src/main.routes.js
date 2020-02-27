'use strict'

/*
 * Module dependencies
 */
let express = require('express')
let router = express.Router()
let config = require('./config/config')
let controller = require('./main.controller')
let service = require('./main.service')
let compression = require('compression')

router.use(compression())

// Define the application routes
router.get('/', controller.getHome)
router.get('/about', controller.getAbout)
router.get('/services', controller.getServices)
router.get('/services/multi-unit-remodel', controller.getService1)
router.get('/services/soft-story-and-structural-upgrade', controller.getService2)
router.get('/services/new-home-construction', controller.getService3)
router.get('/services/commercial-remodel', controller.getService4)
router.get('/services/residential-remodel', controller.getService5)
router.get('/services/adu-conversion', controller.getService6)
router.get('/estimate', controller.getEstimate)
router.post('/estimate/send-email', controller.sendEstimateEmail)
router.get('/contact', controller.getContact)
router.post('/contact/send-email', controller.sendContactEmail)
router.get('/projects', controller.getProjects)
router.get('/project/:projectId', controller.getProject)
router.get('/email-landing', controller.getEmailLanding)
router.get('/email-landing-2', controller.getEmailLanding2)
router.get('/admin', controller.getAdminPage)
router.get('/blog', controller.getBlogPage)
router.get('/post/:postId', controller.getPostPage)

// Route middleware
router.param('projectId', service.getProjectById)
router.param('postId', service.getPostById)

// Middleware to handle errors
router.use((err, req, res, next) => {
  res.render('../views/partials/error', {
    css: config.lib.css,
    js: config.lib.js,
    assets: config.assets,
    pageTitle: 'Error',
    pageDescription: 'An error occured',
    message: err.message,
    error: err
  })
})

module.exports = router
