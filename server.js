'use strict'

/*
 * Module dependencies
 */
let express = require('express')
let app = express()
let router = require('./src/main.routes')
let path = require('path')
let favicon = require('serve-favicon')
let bodyParser = require('body-parser')
let compression = require('compression')
let config = require('./src/config/config')
const port = process.env.PORT || config.port

// Should compress function
let shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) {
    return false
  }
  return compression.filter(req, res)
}

// Enable compression
app.use(compression({
  filter: shouldCompress
}))

// Serve favicon
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))

// Create a static directory
app.use(express.static('public'))

// Set the view engine
app.set('view engine', 'ejs')

// Body parser middleware
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.text())

// Apply application routes
app.use(router)

// Start application
app.listen(port)
console.log('Server listening on port', port)
